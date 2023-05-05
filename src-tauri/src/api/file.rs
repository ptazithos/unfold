use aoe2_probe::Scenario;

#[tauri::command]
pub fn open_scenario(path: String) -> String {
    let scenario = Scenario::from_file(&path).unwrap();
    serde_json::to_string(&scenario.versio).unwrap()
}
