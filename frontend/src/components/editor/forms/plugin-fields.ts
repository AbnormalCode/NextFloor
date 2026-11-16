// Form fields for settings plugins add to a placed device or a piece of furniture, stored per plugin id.

import { html, type TemplateResult } from "lit";
import type { DeviceSetting, SettingValue } from "../../../plugins/api.ts";
import { pluginText, settingsWithDefaults, settingVisible, type PluginData } from "../../../plugins/registry.ts";
import { checkField, entityField, numberField, selectField, textField } from "../fields.ts";
import { entityOptions } from "../entities.ts";
import type { EditorHost } from "../host.ts";

/** One block per plugin: a heading with the plugin's name and a field for each of its settings. `onChange` gets the whole new plugin data. */
export function pluginSettingFields(
  host: EditorHost,
  groups: readonly { pluginId: string; name: string; settings: readonly DeviceSetting[] }[],
  stored: PluginData | null | undefined,
  onChange: (data: PluginData) => void,
): TemplateResult[] {
  const language = host.hass?.language ?? "en";
  return groups.map(({ pluginId, name, settings }) => {
    const values = settingsWithDefaults(settings as DeviceSetting[], stored?.[pluginId]);
    const store = (key: string, value: SettingValue) => onChange({ ...(stored ?? {}), [pluginId]: { ...(stored?.[pluginId] ?? {}), [key]: value } });
    const fields = settings.filter((s) => settingVisible(s, values)).map((s) => {
      const label = pluginText(s.label, language);
      const title = s.hint ? pluginText(s.hint, language) : undefined;
      if (s.type === "boolean") return checkField(host, label, values[s.key] === true, (on) => store(s.key, on), { title });
      if (s.type === "select") {
        const choices = (s.options ?? []).map(([v, l]): [string, string] => [v, pluginText(l, language)]);
        return selectField(host, label, String(values[s.key]), choices, (v) => store(s.key, v), { wide: true, title });
      }
      if (s.type === "entity") {
        const options = entityOptions(host.hass, (id) => !s.domains?.length || s.domains.includes(id.split(".")[0]));
        return entityField(host, label, String(values[s.key]) || null, undefined, options, (v) => store(s.key, v && v !== "none" ? v : ""));
      }
      if (s.type === "text") {
        const max = Math.min(120, s.maxLength ?? 120);
        return textField(host, label, String(values[s.key]), (v) => store(s.key, v.slice(0, max)), { wide: true, title, maxlength: max, placeholder: s.placeholder ? pluginText(s.placeholder, language) : undefined });
      }
      const clamp = (v: number) => Math.min(s.max ?? Infinity, Math.max(s.min ?? -Infinity, v));
      return numberField(host, label, Number(values[s.key]), (v) => store(s.key, clamp(v)), s.step ?? 1, s.min);
    });
    return html`<h4 class="nf-lib-head nf-wide">🔌 ${name}</h4>${fields}`;
  });
}
