import { open } from "@tauri-apps/api/dialog";

export function initAPI() {}

export async function openFile() {
  const selected = await open({
    multiple: false,
  });
  console.log(selected);
}
