import { createAuth, option } from "@typebot.io/forge";

export const auth = createAuth({
  type: "encryptedCredentials",
  name: "ElevenLabs account",
  schema: option.object({
    apiKey: option.string.layout({
      label: "API key",
      isRequired: true,
      inputType: "password",
      helperText:
        "You can generate an API key in your ElevenLabs dashboard in the Profile menu.",
      isDebounceDisabled: true,
      withVariableButton: false,
    }),
  }),
});
