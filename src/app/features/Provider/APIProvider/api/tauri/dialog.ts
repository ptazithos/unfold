import { open } from "@tauri-apps/api/dialog";

export async function openFile() {
  const selected = await open({
    multiple: false,
  });
  console.log(selected);
}
