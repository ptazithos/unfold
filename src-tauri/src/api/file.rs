use aoe2_probe::{parse::Token, ExportFormat, Scenario};

#[tauri::command]
pub async fn open_scenario(path: String) -> String {
    let scenario = Scenario::from_file(&path).unwrap();
    serde_json::to_string(&scenario.versio).unwrap()
}

#[tauri::command]
pub async fn save_scenario(raw: String, path: String, format: ExportFormat) {
    let versio: Token = serde_json::from_str(&raw).unwrap();
    let scenario = Scenario::from_versio(&versio).unwrap();

    scenario.to_file(&path, format).unwrap();
}
