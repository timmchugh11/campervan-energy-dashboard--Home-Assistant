const CARD_VERSION = "0.1.0";

const DEFAULT_CONFIG = {
  title: "Campervan Energy",
  model_url: "/local/van_power/van.glb",
  render_url: "",
  three_module_url: "/local/van_power/van-power-card-deps.js",
  gltf_loader_url: "/local/van_power/van-power-card-deps.js",
  show_time: true,
  entities: {
    solar: {
      pv_voltage: "sensor.epever_pv_voltage",
      pv_current: "sensor.epever_pv_current",
      pv_power: "sensor.epever_pv_power",
      generated_today: "sensor.epever_energy_generated_today",
      generated_today_fallback: "sensor.solar_kwh",
      charging_mode: "sensor.epever_charging_mode_code",
      charger_status: "sensor.epever_charger_status_code",
      battery_status: "sensor.epever_battery_status_code",
      device_temperature: "sensor.epever_device_temperature",
      component_temperature: "sensor.epever_component_temperature",
      maximum_pv_voltage_today: "sensor.epever_max_pv_voltage_today",
      minimum_pv_voltage_today: "sensor.epever_min_pv_voltage_today"
    },
    alternator: {
      voltage: "sensor.charger_alternator_voltage",
      current: "sensor.charger_alternator_current",
      power: "sensor.charger_alternator_power",
      charger_1: {
        voltage: "sensor.charger_1_alternator_voltage",
        current: "sensor.charger_1_alternator_current",
        power: "sensor.charger_1_alternator_power"
      },
      charger_2: {
        voltage: "sensor.charger_2_alternator_voltage",
        current: "sensor.charger_2_alternator_current",
        power: "sensor.charger_2_alternator_power"
      }
    },
    hookup: {
      voltage: "sensor.charger_hookup_voltage",
      current: "sensor.charger_hookup_current",
      power: "sensor.charger_hookup_power",
      charger_1: {
        voltage: "sensor.charger_1_hookup_voltage",
        current: "sensor.charger_1_hookup_current",
        power: "sensor.charger_1_hookup_power"
      },
      charger_2: {
        voltage: "sensor.charger_2_hookup_voltage",
        current: "sensor.charger_2_hookup_current",
        power: "sensor.charger_2_hookup_power"
      }
    },
    bank: {
      state_of_charge: "sensor.fogstar_bms_state_of_charge",
      voltage: "sensor.fogstar_bms_voltage",
      current: "sensor.fogstar_bms_current",
      net_power: "sensor.battery_wattage",
      input_power: "sensor.battery_in_wattage",
      output_power: "sensor.battery_out_wattage",
      remaining_capacity: "sensor.fogstar_bms_remaining_capacity",
      remaining_time: "sensor.battery_remaining_time",
      charger_total_power: "sensor.charger_total_wattage",
      nominal_capacity: "sensor.fogstar_bms_nominal_capacity",
      cycles: "sensor.fogstar_bms_cycles",
      protection_flags: "sensor.fogstar_bms_protection_flags",
      fet_state: "sensor.fogstar_bms_fet_state",
      minimum_cell_voltage: "sensor.fogstar_bms_minimum_cell_voltage",
      maximum_cell_voltage: "sensor.fogstar_bms_maximum_cell_voltage",
      cell_voltage_delta: "sensor.fogstar_bms_cell_voltage_delta",
      highest_temperature: "sensor.fogstar_bms_highest_temperature",
      lowest_temperature: "sensor.fogstar_bms_lowest_temperature"
    },
    battery_1: {
      status: "sensor.battery_1_status",
      current: "sensor.battery_1_current",
      voltage: "sensor.battery_1_voltage",
      state_of_charge: "sensor.battery_1_state_of_charge",
      remaining_capacity: "sensor.battery_1_remaining_capacity",
      nominal_capacity: "sensor.battery_1_nominal_capacity",
      cycles: "sensor.battery_1_cycles",
      protection_flags: "sensor.battery_1_protection_flags",
      fet_state: "sensor.battery_1_fet_state",
      cell_1_voltage: "sensor.battery_1_cell_1_voltage",
      cell_2_voltage: "sensor.battery_1_cell_2_voltage",
      cell_3_voltage: "sensor.battery_1_cell_3_voltage",
      cell_4_voltage: "sensor.battery_1_cell_4_voltage",
      temperature_1: "sensor.battery_1_temperature_1",
      temperature_2: "sensor.battery_1_temperature_2",
      temperature_3: "sensor.battery_1_temperature_3"
    },
    battery_2: {
      status: "sensor.battery_2_status",
      current: "sensor.battery_2_current",
      voltage: "sensor.battery_2_voltage",
      state_of_charge: "sensor.battery_2_state_of_charge",
      remaining_capacity: "sensor.battery_2_remaining_capacity",
      nominal_capacity: "sensor.battery_2_nominal_capacity",
      cycles: "sensor.battery_2_cycles",
      protection_flags: "sensor.battery_2_protection_flags",
      fet_state: "sensor.battery_2_fet_state",
      cell_1_voltage: "sensor.battery_2_cell_1_voltage",
      cell_2_voltage: "sensor.battery_2_cell_2_voltage",
      cell_3_voltage: "sensor.battery_2_cell_3_voltage",
      cell_4_voltage: "sensor.battery_2_cell_4_voltage",
      temperature_1: "sensor.battery_2_temperature_1",
      temperature_2: "sensor.battery_2_temperature_2",
      temperature_3: "sensor.battery_2_temperature_3"
    },
    charger_1: {
      maximum_current_control: "input_number.charger_1_max_charge_current",
      battery_current: "sensor.charger_1_battery_current",
      internal_temperature: "sensor.charger_1_internal_temperature",
      state: "sensor.charger_1_charger_state",
      alarms: "sensor.charger_1_charger_alarms"
    },
    charger_2: {
      maximum_current_control: "input_number.charger_2_max_charge_current",
      battery_current: "sensor.charger_2_battery_current",
      internal_temperature: "sensor.charger_2_internal_temperature",
      state: "sensor.charger_2_charger_state",
      alarms: "sensor.charger_2_charger_alarms"
    },
    summary: {
      total_consumption_today: null,
      solar_total: "sensor.solar_kwh",
      battery_input_total: "sensor.battery_input_kwh",
      battery_output_total: "sensor.battery_out_kwh"
    }
  }
};

const CSS = `
:host {
  --ced-bg: #111111;
  --ced-surface: #1c1c1c;
  --ced-surface-2: #202020;
  --ced-surface-3: #242424;
  --ced-border: #303030;
  --ced-border-subtle: #272727;
  --ced-text: #f2f2f2;
  --ced-sub: #a7a7a7;
  --ced-muted: #777777;
  --ced-solar: #f59e0b;
  --ced-charge: #4caf50;
  --ced-discharge: #e85668;
  --ced-alt: #4b9cd3;
  --ced-hookup: #61b8c8;
  --ced-warning: #f0a72f;
  display: block;
  color: var(--ced-text);
  font-family: var(--primary-font-family, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}
* { box-sizing: border-box; }
.page {
  height: var(--ced-available-height, calc(100vh - 120px));
  min-height: 0;
  background: var(--ced-bg);
  border-radius: 0;
  overflow: hidden;
  padding: 10px 14px;
  display: grid;
  grid-template-rows: 46px minmax(0, 1fr) clamp(170px, 23%, 250px) 58px;
  gap: 8px;
}
.header {
  height: 46px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 1px solid var(--ced-border);
  margin-bottom: 0;
}
.brand, .header-right {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--ced-sub);
  font-size: 13px;
}
.header-right { justify-content: flex-end; }
.van-icon {
  width: 28px;
  height: 28px;
  border: 1px solid var(--ced-border);
  border-radius: 2px;
  display: grid;
  place-items: center;
  color: var(--ced-charge);
}
h1 {
  font-size: 19px;
  line-height: 1;
  margin: 0 0 0 20px;
  font-weight: 600;
  letter-spacing: 0;
}
.status-pill {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid var(--ced-border);
  border-radius: 2px;
  background: transparent;
  color: var(--ced-sub);
  white-space: nowrap;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--ced-charge);
}
.dot.warning { background: var(--ced-warning); }
.grid {
  display: grid;
  grid-template-columns: minmax(250px, 25%) minmax(420px, 1fr) minmax(280px, 25%);
  gap: 8px;
  align-items: stretch;
  min-height: 0;
}
.column {
  display: grid;
  gap: 8px;
  min-height: 0;
}
.grid > .column:first-child {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}
.grid > .column:last-child {
  grid-template-rows: minmax(0, 0.9fr) minmax(0, 1.1fr);
}
.center-column {
  grid-template-rows: minmax(0, 1fr);
}
.card, .van-stage, .controls, .history, .summary {
  background: var(--ced-surface);
  border: 1px solid var(--ced-border);
  border-radius: 3px;
  box-shadow: none;
}
.card {
  padding: 13px 14px 12px;
  position: relative;
  overflow: hidden;
  min-height: 0;
}
.card::before {
  display: none;
}
.card.inactive {
  opacity: 0.56;
}
.card.active::after {
  display: none;
}
.card-head, .row, .metric-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}
.label {
  color: var(--ced-sub);
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 650;
  letter-spacing: 0;
}
.state {
  color: var(--ced-muted);
  font-size: 12px;
  white-space: nowrap;
}
.primary {
  margin-top: 14px;
  font-size: clamp(32px, 3.7vw, 52px);
  line-height: 0.95;
  font-weight: 560;
  font-variant-numeric: tabular-nums;
}
.source-card.active .primary {
  color: var(--accent);
}
.dual-input-card .primary {
  margin-top: 8px;
  font-size: clamp(30px, 3.2vw, 46px);
}
.dual-input-card .secondary {
  margin-top: 8px;
}
.dual-input-card {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  grid-template-rows: auto auto auto minmax(0, 1fr);
  column-gap: 18px;
}
.dual-input-card .card-head {
  grid-column: 1 / -1;
  grid-row: 1;
}
.dual-input-card > .primary {
  grid-column: 1;
  grid-row: 2;
}
.dual-input-card > .primary + .state {
  grid-column: 1;
  grid-row: 3;
}
.dual-input-card > .secondary {
  grid-column: 1;
  grid-row: 4;
  align-self: start;
}
.dual-input-card > .charger-breakdown {
  grid-column: 2;
  grid-row: 2 / 5;
  align-self: center;
  margin: 0;
}
.unit {
  font-size: 0.42em;
  color: var(--ced-sub);
  margin-left: 5px;
  font-weight: 600;
}
.secondary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 12px;
}
.source-card .secondary {
  grid-template-columns: 1fr;
  gap: 8px;
}
.source-meta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.charger-breakdown {
  display: grid;
  gap: 5px;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--ced-border-subtle);
}
.charger-input-row {
  display: grid;
  grid-template-columns: 58px 50px minmax(0, 1fr);
  column-gap: 6px;
  row-gap: 2px;
  align-items: baseline;
  min-width: 0;
  font-size: 11px;
}
.charger-input-row .charger-name {
  color: var(--ced-sub);
  font-weight: 650;
}
.charger-input-row .charger-power {
  color: var(--ced-text);
  font-weight: 650;
  font-variant-numeric: tabular-nums;
}
.charger-input-row .charger-electrical,
.charger-input-row .charger-state {
  color: var(--ced-muted);
  white-space: nowrap;
}
.charger-input-row .charger-electrical {
  grid-column: 2 / 4;
  grid-row: 2;
  font-size: 10px;
}
.charger-input-row .charger-state {
  grid-column: 3;
  grid-row: 1;
  text-align: right;
}
.metric {
  min-width: 0;
}
.metric span {
  display: block;
  color: var(--ced-muted);
  font-size: 11px;
  margin-bottom: 4px;
}
.metric strong {
  display: block;
  color: var(--ced-text);
  font-size: 15px;
  font-weight: 580;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.van-stage {
  height: 100%;
  min-height: 0;
  position: relative;
  overflow: hidden;
  background: #111111;
}
.van-render, .three-host {
  position: absolute;
  inset: 0;
}
.van-render {
  background-image: var(--render-url);
  background-repeat: no-repeat;
  background-size: min(78%, 760px) auto;
  background-position: center 54%;
  filter: drop-shadow(0 30px 28px rgba(0,0,0,0.35));
  z-index: 1;
}
.van-silhouette {
  position: absolute;
  left: 9%;
  right: 9%;
  top: 19%;
  height: 52%;
  z-index: 0;
  opacity: 0.88;
}
.van-silhouette svg {
  width: 100%;
  height: 100%;
  display: block;
  filter: drop-shadow(0 28px 26px rgba(0,0,0,0.36));
}
.van-stage.model-loaded .van-silhouette,
.van-stage.model-loaded .model-state {
  display: none;
}
.three-host canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.three-host {
  z-index: 2;
  transform: translate(9%, -2%);
}
.flow {
  display: none !important;
}
.flow.solar { --flow-color: var(--ced-solar); left: 20%; top: 25%; width: 34%; transform: rotate(12deg); }
.flow.alternator-a { --flow-color: var(--ced-alt); left: 21%; top: 62%; width: 38%; transform: rotate(-6deg); }
.flow.alternator-b { --flow-color: var(--ced-alt); left: 26%; top: 68%; width: 32%; transform: rotate(-12deg); animation-delay: -1.4s; }
.flow.hookup { --flow-color: var(--ced-hookup); right: 23%; top: 61%; width: 26%; transform: rotate(188deg); }
.flow.output { --flow-color: var(--ced-discharge); left: 48%; top: 76%; width: 34%; transform: rotate(5deg); }
@keyframes flow {
  from { background-position: -180px 0; }
  to { background-position: 180px 0; }
}
.hotspot {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid var(--hotspot-color);
  background: #161616;
  box-shadow: 0 0 0 4px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 220ms ease;
}
.hotspot.active {
  opacity: 1;
  pointer-events: auto;
  box-shadow: 0 0 0 4px rgba(255,255,255,0.04), 0 0 18px color-mix(in srgb, var(--hotspot-color) 40%, transparent);
}
.hotspot.solar { --hotspot-color: var(--ced-solar); left: 49%; top: 43%; }
.hotspot.alternator { --hotspot-color: var(--ced-alt); left: 38%; top: 67%; }
.hotspot.hookup { --hotspot-color: var(--ced-hookup); right: 39%; top: 58%; }
.hotspot.battery { --hotspot-color: var(--ced-charge); left: 56%; top: 57%; }
.model-state {
  position: absolute;
  left: 24px;
  top: 20px;
  z-index: 4;
  color: var(--ced-muted);
  font-size: 12px;
}
.model-views {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 4;
  display: inline-flex;
  padding: 3px;
  gap: 2px;
  background: #171717;
  border: 1px solid var(--ced-border);
  border-radius: 3px;
}
.model-views button {
  appearance: none;
  border: 0;
  border-radius: 2px;
  background: transparent;
  color: var(--ced-muted);
  min-height: 28px;
  padding: 0 10px;
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}
.model-views button:hover {
  color: var(--ced-text);
  background: #202020;
}
.model-views button.active {
  color: var(--ced-text);
  background: #2a2a2a;
}
.battery-power-readout {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  padding-top: 12px;
  border-top: 1px solid #383b3e;
  z-index: 4;
}
.battery-power-readout .value {
  font-size: clamp(36px, 4.4vw, 66px);
  line-height: 0.9;
  font-weight: 650;
  font-variant-numeric: tabular-nums;
  color: var(--ced-text);
  transition: color 180ms ease;
}
.battery-power-readout.charging .value {
  color: var(--ced-charge);
}
.battery-power-readout.discharging .value {
  color: var(--ced-discharge);
}
.battery-hero .primary {
  color: var(--ced-charge);
}
.battery-status {
  margin-top: 12px;
  color: var(--ced-sub);
  font-size: 15px;
}
.battery-strip {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px 4px;
  margin-top: 6px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--ced-border-subtle);
  border-radius: 0;
}
.soc-ring {
  width: 64px;
  height: auto;
  min-height: 38px;
  border-radius: 0;
  display: grid;
  place-items: center start;
  background: none;
  border: 0;
  color: var(--ced-charge);
  font-weight: 700;
  font-size: 16px;
  font-variant-numeric: tabular-nums;
}
.strip-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}
.balance {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 0;
  background: transparent;
  border: 0;
  border-top: 1px solid var(--ced-border-subtle);
}
.lower {
  display: grid;
  grid-template-columns: minmax(260px, 25%) 1fr;
  gap: 8px;
  margin-top: 0;
  min-height: 0;
}
.summary, .history, .controls {
  padding: 12px 14px;
  min-height: 0;
}
.summary-grid {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}
.chart {
  height: calc(100% - 46px);
  min-height: 88px;
  margin-top: 10px;
}
.chart svg {
  width: 100%;
  height: 100%;
  display: block;
}
.controls {
  margin-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  padding: 12px 16px;
  align-items: center;
}
.legend {
  display: flex;
  gap: 14px;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 8px;
  color: var(--ced-muted);
  font-size: 11px;
}
.legend span {
  display: inline-flex;
  gap: 6px;
  align-items: center;
}
.legend i {
  width: 9px;
  height: 9px;
  border-radius: 2px;
  display: inline-block;
  background: var(--legend-color);
}
.slider-row {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) minmax(160px, 260px) 64px;
  gap: 12px;
  align-items: center;
}
input[type="range"] {
  width: 100%;
  accent-color: var(--ced-charge);
}
.model-detail-panel {
  position: absolute;
  top: 52px;
  left: 14px;
  width: min(420px, calc(100% - 28px));
  max-height: calc(100% - 142px);
  overflow: auto;
  z-index: 5;
  background: #171717;
  border: 1px solid var(--ced-border);
  border-radius: 0 3px 3px 3px;
  padding: 14px;
  animation: model-detail-drop 160ms ease-out;
}
.model-detail-panel[hidden] { display: none; }
@keyframes model-detail-drop {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}
.model-detail-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.model-detail-panel h2 {
  margin: 0;
  font-size: 14px;
  font-weight: 650;
}
.model-detail-grid {
  display: grid;
  gap: 8px;
}
.model-detail-close {
  appearance: none;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 0;
  background: transparent;
  color: var(--ced-muted);
  font: inherit;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.model-detail-close:hover {
  color: var(--ced-text);
  background: #242424;
}
.unavailable {
  color: var(--ced-muted);
}
@media (max-width: 1100px) {
  .page {
    height: auto;
    min-height: 0;
    overflow: visible;
    grid-template-rows: auto auto auto auto;
  }
  .grid, .lower {
    grid-template-columns: 1fr;
  }
  .grid {
    grid-template-rows: auto;
  }
  .grid > .column:first-child,
  .grid > .column:last-child,
  .center-column {
    grid-template-rows: none;
    grid-auto-rows: auto;
  }
  .center-column {
    order: -1;
    min-height: min(62vh, 560px);
  }
  .van-stage {
    height: auto;
    min-height: min(62vh, 560px);
  }
  .card {
    min-height: 190px;
  }
  .lower {
    grid-template-rows: auto auto;
  }
  .history {
    min-height: 280px;
  }
  .chart {
    height: 210px;
    min-height: 210px;
  }
  .controls {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 650px) {
  .page {
    padding: 8px;
    gap: 8px;
  }
  .header {
    grid-template-columns: minmax(0, 1fr) auto;
    height: 42px;
    gap: 8px;
  }
  .brand {
    display: none;
  }
  .header h1 {
    text-align: left;
    font-size: 18px;
    white-space: nowrap;
  }
  .header-right {
    justify-content: flex-end;
    gap: 6px;
  }
  .status-pill {
    padding: 0 7px;
    font-size: 10px;
  }
  .grid, .column, .lower {
    gap: 8px;
  }
  .center-column,
  .van-stage {
    min-height: 126px;
  }
  .three-host,
  .van-render,
  .van-silhouette,
  .model-state,
  .model-views,
  .model-detail-panel {
    display: none !important;
  }
  .battery-power-readout {
    left: 12px;
    right: 12px;
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    gap: 10px;
  }
  .battery-power-readout .value {
    font-size: 40px;
    white-space: nowrap;
  }
  .secondary {
    grid-template-columns: repeat(2, 1fr);
  }
  .strip-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .battery-strip {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 8px;
  }
  .slider-row {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 6px 10px;
  }
  .slider-row > div {
    grid-column: 1 / -1;
  }
  .slider-row input {
    grid-column: 1;
  }
  .slider-row strong {
    grid-column: 2;
  }
  .dual-input-card {
    display: block;
  }
  .dual-input-card > .charger-breakdown {
    margin-top: 12px;
  }
  .controls {
    padding: 10px;
  }
  .history {
    min-height: 270px;
  }
  .legend {
    justify-content: flex-start;
    gap: 8px;
  }
}
`;

class CampervanEnergyDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.config = DEFAULT_CONFIG;
    this._hass = undefined;
    this._rendered = false;
    this._drawer = null;
    this._history = null;
    this._dailyEnergy = null;
    this._historyRequestedAt = 0;
    this._threeStarted = false;
    this._timeTimer = null;
    this._viewportHandler = () => {
      this.updateViewportHeight();
      if (!window.matchMedia("(max-width: 650px)").matches) this.startThree();
    };
  }

  static getConfigElement() {
    return document.createElement("campervan-energy-dashboard-editor");
  }

  static getStubConfig() {
    return DEFAULT_CONFIG;
  }

  setConfig(config) {
    this.config = mergeConfig(DEFAULT_CONFIG, config || {});
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._rendered) this.render();
    this.updateDynamic();
    this.fetchHistory();
  }

  disconnectedCallback() {
    if (this._timeTimer) clearInterval(this._timeTimer);
    window.removeEventListener("resize", this._viewportHandler);
    document.removeEventListener("visibilitychange", this._visibilityHandler);
  }

  updateViewportHeight() {
    const page = this.shadowRoot?.querySelector(".page");
    if (!page) return;
    const top = Math.max(0, this.getBoundingClientRect().top);
    page.style.setProperty("--ced-available-height", `${Math.max(560, window.innerHeight - top - 64)}px`);
  }

  render() {
    const renderUrl = this.config.render_url ? `url("${this.config.render_url}")` : "none";
    this.shadowRoot.innerHTML = `<style>${CSS}</style>
      <div class="page" style="--render-url: ${renderUrl}">
        <header class="header">
          <div class="brand">
            <div class="van-icon" aria-hidden="true">${iconVan()}</div>
            <span>Energy system</span>
          </div>
          <h1>${escapeHtml(this.config.title || "Campervan Energy")}</h1>
          <div class="header-right">
            <span class="status-pill"><span class="dot" data-status-dot></span><span data-system-status>Reading system</span></span>
            <span class="status-pill" data-time></span>
          </div>
        </header>
        <section class="grid">
          <div class="column">
            ${this.sourceCard("solar", "Solar", "Solar panels to EPEVER MPPT", "var(--ced-solar)")}
            ${this.sourceCard("alternator", "Alternator", "Two DC-to-DC chargers to battery", "var(--ced-alt)")}
            ${this.sourceCard("hookup", "Hookup", "Two charger hookup inputs to battery", "var(--ced-hookup)")}
          </div>
          <div class="column center-column">
            <div class="van-stage">
              <div class="model-state" data-model-state>Loading van model</div>
              <div class="van-silhouette" aria-hidden="true">${vanSilhouette()}</div>
              <div class="van-render" data-van-render></div>
              <div class="three-host" data-three-host></div>
              <div class="model-views" aria-label="Van system view">
                <button class="active" data-model-view="overview">Overview</button>
                <button data-model-view="solar">Solar</button>
                <button data-model-view="engine">Engine</button>
                <button data-model-view="hookup">Hookup</button>
                <button data-model-view="battery">Battery</button>
              </div>
              <aside class="model-detail-panel" data-model-detail hidden></aside>
              <div class="battery-power-readout" data-battery-power-readout>
                <div>
                  <div class="label">Battery power</div>
                  <div class="state" data-consumption-state>Net battery charge or discharge</div>
                </div>
                <div class="value"><span data-consumption>--</span><span class="unit">W</span></div>
              </div>
            </div>
          </div>
          <div class="column">
            ${this.batteryHero()}
            ${this.batteryComparison()}
          </div>
        </section>
        <section class="lower">
          ${this.todaySummary()}
          ${this.historyChart()}
        </section>
        ${this.controls()}
      </div>`;
    this._rendered = true;
    window.removeEventListener("resize", this._viewportHandler);
    window.addEventListener("resize", this._viewportHandler, { passive: true });
    requestAnimationFrame(() => {
      this.updateViewportHeight();
      requestAnimationFrame(() => this.updateViewportHeight());
    });
    this.bindEvents();
    this.updateClock();
    if (this.config.show_time !== false) {
      this._timeTimer = setInterval(() => this.updateClock(), 30000);
    }
    this.startThree();
    this.updateDynamic();
  }

  sourceCard(key, title, subtitle, accent) {
    return `<article class="card source-card ${key === "solar" ? "" : "dual-input-card"}" data-card="${key}" style="--accent: ${accent}">
      <div class="card-head">
        <div>
          <div class="label">${title}</div>
          <div class="state">${subtitle}</div>
        </div>
      </div>
      <div class="primary"><span data-${key}-power>--</span><span class="unit">W</span></div>
      <div class="state" data-${key}-state>--</div>
      <div class="secondary">
        <div class="source-meta">
          <div class="metric"><span>Voltage</span><strong data-${key}-voltage>--</strong></div>
          <div class="metric"><span>Current</span><strong data-${key}-current>--</strong></div>
        </div>
        ${key === "solar" ? `<div class="metric"><span>Generated today</span><strong data-${key}-extra>--</strong></div>` : ""}
      </div>
      ${key === "solar" ? "" : this.chargerBreakdown(key)}
    </article>`;
  }

  chargerBreakdown(source) {
    return `<div class="charger-breakdown" aria-label="${source} by charger">
      ${["1", "2"].map((index) => `<div class="charger-input-row">
        <span class="charger-name">Charger ${index}</span>
        <strong class="charger-power" data-${source}-charger-${index}-power>--</strong>
        <span class="charger-electrical" data-${source}-charger-${index}-electrical>--</span>
        <span class="charger-state" data-${source}-charger-${index}-state>--</span>
      </div>`).join("")}
    </div>`;
  }

  batteryHero() {
    return `<article class="card battery-hero" data-card="battery" style="--accent: var(--ced-charge)">
      <div class="card-head">
        <div>
          <div class="label">Battery bank</div>
          <div class="state">Combined Fogstar bank</div>
        </div>
      </div>
      <div class="primary"><span data-bank-soc>--</span><span class="unit">%</span></div>
      <div class="battery-status" data-bank-status>--</div>
      <div class="secondary">
        <div class="metric"><span>Capacity</span><strong data-bank-capacity>--</strong></div>
        <div class="metric"><span>Voltage</span><strong data-bank-voltage>--</strong></div>
        <div class="metric"><span>Time</span><strong data-bank-time>--</strong></div>
      </div>
    </article>`;
  }

  batteryComparison() {
    return `<article class="card" style="--accent: var(--ced-border)">
      <div class="card-head">
        <div>
          <div class="label">Battery comparison</div>
          <div class="state" data-comparison-status>--</div>
        </div>
      </div>
      ${this.batteryStrip("1")}
      ${this.batteryStrip("2")}
      <div class="balance">
        <div class="metric-row"><span class="state">SOC difference</span><strong data-soc-diff>--</strong></div>
        <div class="metric-row"><span class="state">Current share</span><strong data-current-share>--</strong></div>
      </div>
    </article>`;
  }

  batteryStrip(index) {
    return `<div class="battery-strip">
      <div class="soc-ring" data-battery-${index}-ring style="--soc: 0%">--</div>
      <div>
        <div class="row"><strong>Battery ${index}</strong><span class="state" data-battery-${index}-status>--</span></div>
        <div class="strip-grid">
          <div class="metric"><span>Capacity</span><strong data-battery-${index}-capacity>--</strong></div>
          <div class="metric"><span>Voltage</span><strong data-battery-${index}-voltage>--</strong></div>
          <div class="metric"><span>Current</span><strong data-battery-${index}-current>--</strong></div>
        </div>
      </div>
    </div>`;
  }

  todaySummary() {
    return `<article class="summary">
      <div class="label">Today's energy</div>
      <div class="summary-grid">
        <div class="metric-row"><span class="state">Solar generated</span><strong data-today-solar>--</strong></div>
        <div class="metric-row"><span class="state">Battery energy in</span><strong data-today-in>--</strong></div>
        <div class="metric-row"><span class="state">Battery energy out</span><strong data-today-out>--</strong></div>
        <div class="metric-row"><span class="state">Net battery change</span><strong data-today-net>--</strong></div>
      </div>
    </article>`;
  }

  historyChart() {
    return `<article class="history">
      <div class="card-head">
        <div>
          <div class="label">Energy history</div>
          <div class="state">Last 24 hours from recorder statistics when available</div>
        </div>
        <span class="state" data-history-state>Waiting for data</span>
      </div>
      <div class="legend">
        <span><i style="--legend-color:#f59e0b"></i>Solar</span>
        <span><i style="--legend-color:#4caf50"></i>Battery in</span>
        <span><i style="--legend-color:#e85668"></i>Battery out</span>
        <span><i style="--legend-color:#4b9cd3"></i>Alternator</span>
        <span><i style="--legend-color:#61b8c8"></i>Hookup</span>
      </div>
      <div class="chart" data-chart>${emptyChart()}</div>
    </article>`;
  }

  controls() {
    return `<section class="controls">
      ${this.sliderControl("1")}
      ${this.sliderControl("2")}
    </section>`;
  }

  sliderControl(index) {
    return `<div class="slider-row">
      <div>
        <div class="label">Charger ${index} maximum current</div>
        <div class="state" data-charger-${index}-status>Battery charger input limit</div>
      </div>
      <input type="range" min="10" max="50" step="1" data-charger-slider="${index}" aria-label="Charger ${index} maximum current">
      <strong data-charger-${index}-value>--</strong>
    </div>`;
  }

  bindEvents() {
    this.shadowRoot.querySelectorAll("[data-charger-slider]").forEach((el) => {
      el.addEventListener("change", (event) => this.setChargerCurrent(event.currentTarget.dataset.chargerSlider, event.currentTarget.value));
      el.addEventListener("input", (event) => this.setText(`[data-charger-${event.currentTarget.dataset.chargerSlider}-value]`, `${event.currentTarget.value} A`));
    });
    this.shadowRoot.querySelectorAll("[data-model-view]").forEach((el) => {
      el.addEventListener("click", () => this.selectModelView(el.dataset.modelView));
    });
    this._visibilityHandler = () => {
      this._paused = document.hidden;
    };
    document.addEventListener("visibilitychange", this._visibilityHandler);
  }

  updateClock() {
    const el = this.shadowRoot.querySelector("[data-time]");
    if (!el) return;
    if (this.config.show_time === false) {
      el.hidden = true;
      return;
    }
    el.textContent = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date());
  }

  selectModelView(view) {
    this.shadowRoot.querySelectorAll("[data-model-view]").forEach((el) => {
      el.classList.toggle("active", el.dataset.modelView === view);
    });
    this._modelController?.focus(view);
    const detail = { solar: "solar", engine: "charger", hookup: "charger", battery: "battery" }[view];
    if (detail) this.openModelDetail(detail);
    else this.closeModelDetail();
  }

  updateDynamic() {
    if (!this._hass || !this._rendered) return;
    const e = this.config.entities;
    const solarPower = this.num(e.solar.pv_power);
    const altInputs = this.chargerSourceValues(e.alternator);
    const hookupInputs = this.chargerSourceValues(e.hookup);
    const altPower = sumSourceValues(altInputs, "power", this.num(e.alternator.power));
    const altCurrent = sumSourceValues(altInputs, "current", this.num(e.alternator.current));
    const altVoltage = averageReportingVoltage(altInputs, this.num(e.alternator.voltage));
    const hookupPower = sumSourceValues(hookupInputs, "power", this.num(e.hookup.power));
    const hookupCurrent = sumSourceValues(hookupInputs, "current", this.num(e.hookup.current));
    const hookupVoltage = averageReportingVoltage(hookupInputs, this.num(e.hookup.voltage));
    const bankPower = this.num(e.bank.net_power);
    const outputPower = Math.abs(this.num(e.bank.output_power, Math.min(bankPower, 0)));
    const soc = this.num(e.bank.state_of_charge);
    const b1soc = this.num(e.battery_1.state_of_charge);
    const b2soc = this.num(e.battery_2.state_of_charge);
    const b1current = this.num(e.battery_1.current);
    const b2current = this.num(e.battery_2.current);

    this.updateSource("solar", solarPower, this.num(e.solar.pv_voltage), this.num(e.solar.pv_current), this.energy(e.solar.generated_today, e.solar.generated_today_fallback), solarPower > 10 ? "Charging" : "Inactive");
    const altState = altPower > 20 ? "Charging" : altVoltage > 12.5 ? "Engine available" : "Engine off";
    this.updateSource("alternator", altPower, altVoltage, altCurrent, "2 charger inputs", altState);
    this.updateChargerBreakdown("alternator", altInputs);
    const hookupState = hookupPower > 20 ? "Charging" : hookupVoltage > 5 ? "Connected" : "Disconnected";
    this.updateSource("hookup", hookupPower, hookupVoltage, hookupCurrent, "2 charger inputs", hookupState);
    this.updateChargerBreakdown("hookup", hookupInputs);

    this.setText("[data-consumption]", Number.isFinite(bankPower) ? fmtNum(bankPower, 0) : "--");
    this.setText("[data-consumption-state]", batteryPowerText(bankPower));
    const batteryPowerReadout = this.shadowRoot.querySelector("[data-battery-power-readout]");
    batteryPowerReadout?.classList.toggle("charging", bankPower > 20);
    batteryPowerReadout?.classList.toggle("discharging", bankPower < -20);
    this.setText("[data-bank-soc]", this.state(e.bank.state_of_charge));
    this.setText("[data-bank-capacity]", this.entityText(e.bank.remaining_capacity, "Ah", 0));
    this.setText("[data-bank-voltage]", this.entityText(e.bank.voltage, "V", 2));
    this.setText("[data-bank-time]", cleanTime(this.state(e.bank.remaining_time)));
    this.setText("[data-bank-status]", batteryStatus(bankPower, outputPower));

    this.updateBattery("1", e.battery_1);
    this.updateBattery("2", e.battery_2);
    const diff = Math.abs(b1soc - b2soc);
    const totalCurrent = Math.abs(b1current) + Math.abs(b2current);
    const share1 = totalCurrent > 0 ? Math.abs(b1current) / totalCurrent * 100 : null;
    const balance = diff < 3 ? "Balanced" : diff < 8 ? "Minor imbalance" : "Check battery balance";
    this.setText("[data-comparison-status]", `${operatingState(bankPower)} · ${balance}`);
    this.setText("[data-soc-diff]", Number.isFinite(diff) ? `${fmtNum(diff, 1)} %` : "--");
    this.setText("[data-current-share]", Number.isFinite(share1) ? `${fmtNum(share1, 0)} / ${fmtNum(100 - share1, 0)} %` : "--");

    this.updateDailySummary();

    this.updateSlider("1", e.charger_1.maximum_current_control);
    this.updateSlider("2", e.charger_2.maximum_current_control);
    this.setText("[data-system-status]", this.systemStatus());
    this.shadowRoot.querySelector("[data-status-dot]")?.classList.toggle("warning", this.systemStatus() !== "System OK");

    this.toggleActive("solar", solarPower > 10);
    this.toggleActive("alternator", altPower > 20);
    this.toggleActive("hookup", hookupPower > 20);
    this.toggleActive("output", outputPower > 20);
    this.shadowRoot.querySelector(".hotspot.battery")?.classList.toggle("active", Math.abs(bankPower) > 20);
  }

  updateSource(key, power, voltage, current, extra, state) {
    this.setText(`[data-${key}-power]`, fmtNum(Math.max(0, power), 0));
    const active = power > 10;
    const hasVoltage = Number.isFinite(voltage) && Math.abs(voltage) > 0.05;
    const hasCurrent = Number.isFinite(current) && Math.abs(current) > 0.05;
    this.setText(`[data-${key}-voltage]`, active || hasVoltage ? `${fmtNum(voltage, voltage > 50 ? 0 : 1)} V` : "--");
    this.setText(`[data-${key}-current]`, active || hasCurrent ? `${fmtNum(current, 1)} A` : "--");
    this.setText(`[data-${key}-extra]`, extra);
    this.setText(`[data-${key}-state]`, state);
    this.shadowRoot.querySelector(`[data-card="${key}"]`)?.classList.toggle("active", active);
    this.shadowRoot.querySelector(`[data-card="${key}"]`)?.classList.toggle("inactive", !active);
    this.shadowRoot.querySelector(`.hotspot.${key === "alternator" ? "alternator" : key}`)?.classList.toggle("active", active);
  }

  chargerSourceValues(sourceMap) {
    return ["1", "2"].map((index) => {
      const entities = sourceMap[`charger_${index}`] || {};
      return {
        index,
        voltage: this.num(entities.voltage),
        current: this.num(entities.current),
        power: this.num(entities.power)
      };
    });
  }

  updateChargerBreakdown(source, inputs) {
    inputs.forEach((input) => {
      const hasPower = Number.isFinite(input.power);
      const hasVoltage = Number.isFinite(input.voltage) && input.voltage > 0.05;
      const hasCurrent = Number.isFinite(input.current) && Math.abs(input.current) > 0.05;
      const connectedThreshold = source === "alternator" ? 12.5 : 5;
      const state = input.power > 20 ? "Charging" : input.voltage > connectedThreshold ? "Available" : "Off";
      this.setText(`[data-${source}-charger-${input.index}-power]`, hasPower ? `${fmtNum(Math.max(0, input.power), 0)} W` : "--");
      const electrical = [
        hasVoltage ? `${fmtNum(input.voltage, 1)} V` : "--",
        hasCurrent ? `${fmtNum(input.current, 1)} A` : "--"
      ].join(" · ");
      this.setText(`[data-${source}-charger-${input.index}-electrical]`, electrical);
      this.setText(`[data-${source}-charger-${input.index}-state]`, state);
    });
  }

  updateBattery(index, entityMap) {
    const soc = this.num(entityMap.state_of_charge);
    const rawSoc = this.state(entityMap.state_of_charge);
    this.setText(`[data-battery-${index}-ring]`, rawSoc !== undefined ? `${rawSoc}%` : "--");
    const ring = this.shadowRoot.querySelector(`[data-battery-${index}-ring]`);
    if (ring) ring.style.setProperty("--soc", `${Math.max(0, Math.min(100, soc || 0))}%`);
    this.setText(`[data-battery-${index}-status]`, "", true);
    this.setText(`[data-battery-${index}-capacity]`, this.entityText(entityMap.remaining_capacity, "Ah", 0));
    this.setText(`[data-battery-${index}-voltage]`, this.entityText(entityMap.voltage, "V", 2));
    this.setText(`[data-battery-${index}-current]`, this.entityText(entityMap.current, "A", 1));
  }

  updateSlider(index, entityId) {
    const value = this.num(entityId);
    const slider = this.shadowRoot.querySelector(`[data-charger-slider="${index}"]`);
    if (slider && Number.isFinite(value) && document.activeElement !== slider) slider.value = value;
    this.setText(`[data-charger-${index}-value]`, Number.isFinite(value) ? `${fmtNum(value, 0)} A` : "--");
  }

  async setChargerCurrent(index, value) {
    const entityId = this.config.entities[`charger_${index}`]?.maximum_current_control;
    if (!this._hass || !entityId) return;
    await this._hass.callService("input_number", "set_value", {
      entity_id: entityId,
      value: Number(value)
    });
  }

  updateDailySummary() {
    const values = this._dailyEnergy || {};
    const text = (value) => Number.isFinite(value) ? `${fmtNum(value, 2)} kWh` : "--";
    this.setText("[data-today-solar]", text(values.solar));
    this.setText("[data-today-in]", text(values.batteryIn));
    this.setText("[data-today-out]", text(values.batteryOut));
    const net = Number.isFinite(values.batteryIn) && Number.isFinite(values.batteryOut)
      ? values.batteryIn - values.batteryOut
      : NaN;
    this.setText("[data-today-net]", text(net));
  }

  async fetchHistory() {
    if (!this._hass || !this._rendered) return;
    const now = Date.now();
    if (now - this._historyRequestedAt < 300000) return;
    this._historyRequestedAt = now;
    const e = this.config.entities;
    const powerIds = [
      e.solar.pv_power,
      e.bank.input_power,
      e.bank.output_power,
      e.alternator.power,
      e.hookup.power
    ].filter(Boolean);
    const energyIds = [
      e.summary.solar_total,
      e.summary.battery_input_total,
      e.summary.battery_output_total
    ].filter(Boolean);
    const historyStart = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const end = new Date();
    const dayStart = new Date();
    dayStart.setHours(0, 0, 0, 0);
    const baselineStart = new Date(dayStart.getTime() - 60 * 60 * 1000);

    const [historyResult, energyResult] = await Promise.allSettled([
      this._hass.callWS({
        type: "history/history_during_period",
        start_time: historyStart.toISOString(),
        end_time: end.toISOString(),
        entity_ids: powerIds,
        include_start_time_state: true,
        significant_changes_only: false,
        minimal_response: false,
        no_attributes: true
      }),
      this._hass.callWS({
        type: "recorder/statistics_during_period",
        start_time: baselineStart.toISOString(),
        end_time: end.toISOString(),
        statistic_ids: energyIds,
        period: "hour",
        types: ["sum", "state"]
      })
    ]);

    if (historyResult.status === "fulfilled") {
      this._history = historyResult.value;
      this.setText("[data-history-state]", "Recorder history");
      this.renderChartFromHistory(historyResult.value, powerIds, historyStart);
    } else {
      console.error("Campervan power history failed", historyResult.reason);
      this.setText("[data-history-state]", "Live snapshot fallback");
      this.renderSnapshotChart();
    }

    if (energyResult.status === "fulfilled") {
      const stats = energyResult.value;
      const dailyDelta = (id) => {
        const current = this.num(id);
        const rows = stats?.[id] || [];
        const rowTime = (row) => typeof row.start === "number" ? row.start : Date.parse(row.start);
        const baselineRows = rows.filter((row) => rowTime(row) <= dayStart.getTime());
        const baselineRow = baselineRows.at(-1) || rows[0];
        const baseline = Number(baselineRow?.state ?? baselineRow?.sum);
        if (!Number.isFinite(current) || !Number.isFinite(baseline)) return NaN;
        return Math.max(0, current >= baseline ? current - baseline : current);
      };
      this._dailyEnergy = {
        solar: dailyDelta(e.summary.solar_total),
        batteryIn: dailyDelta(e.summary.battery_input_total),
        batteryOut: dailyDelta(e.summary.battery_output_total)
      };
      this.updateDailySummary();
    } else {
      console.error("Campervan daily energy statistics failed", energyResult.reason);
    }
  }

  renderChartFromHistory(history, ids, start) {
    const hourMs = 60 * 60 * 1000;
    const series = ids.map((id, entityIndex) => {
      let rows = history?.[id];
      if (!rows && Array.isArray(history)) {
        rows = history.find((group) => group?.[0]?.entity_id === id);
      }
      const buckets = Array.from({ length: 24 }, () => []);
      (rows || []).forEach((row) => {
        const value = Number(row.state ?? row.s);
        const rawTime = row.last_updated ?? row.last_changed ?? row.lu ?? row.lc;
        const timestamp = typeof rawTime === "number" ? rawTime * 1000 : Date.parse(rawTime);
        const bucket = Math.floor((timestamp - start.getTime()) / hourMs);
        if (Number.isFinite(value) && bucket >= 0 && bucket < 24) buckets[bucket].push(Math.max(0, value));
      });
      return buckets.map((values) => values.length
        ? values.reduce((sum, value) => sum + value, 0) / values.length
        : 0);
    });
    const labels = Array.from({ length: 24 }, (_, index) => {
      const time = new Date(start.getTime() + index * hourMs);
      return `${String(time.getHours()).padStart(2, "0")}:00`;
    });
    this.shadowRoot.querySelector("[data-chart]").innerHTML = chartSvg(series, ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"], labels);
  }

  renderSnapshotChart() {
    const e = this.config.entities;
    const series = [
      [this.num(e.solar.pv_power)],
      [this.num(e.bank.input_power)],
      [this.num(e.bank.output_power)],
      [this.num(e.alternator.power)],
      [this.num(e.hookup.power)]
    ];
    this.shadowRoot.querySelector("[data-chart]").innerHTML = chartSvg(series, ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"]);
  }

  openModelDetail(type) {
    const panel = this.shadowRoot.querySelector("[data-model-detail]");
    if (!panel) return;
    panel.hidden = false;
    const close = `<button class="model-detail-close" data-close-model-detail title="Close" aria-label="Close">&times;</button>`;
    const title = type === "battery" ? "Battery health" : type === "solar" ? "Solar diagnostics" : "Charger diagnostics";
    panel.innerHTML = `<div class="model-detail-head"><h2>${title}</h2>${close}</div><div class="model-detail-grid">${this.detailRows(type)}</div>`;
    panel.querySelector("[data-close-model-detail]").addEventListener("click", () => this.closeModelDetail());
  }

  closeModelDetail() {
    const panel = this.shadowRoot.querySelector("[data-model-detail]");
    if (panel) panel.hidden = true;
  }

  detailRows(type) {
    const e = this.config.entities;
    if (type === "solar") {
      return rows(this, [
        ["Charging mode", e.solar.charging_mode],
        ["Charger status", e.solar.charger_status],
        ["Battery status", e.solar.battery_status],
        ["Controller temp", e.solar.device_temperature, "°C"],
        ["Component temp", e.solar.component_temperature, "°C"],
        ["Max PV today", e.solar.maximum_pv_voltage_today, "V"],
        ["Min PV today", e.solar.minimum_pv_voltage_today, "V"]
      ]);
    }
    if (type === "charger") {
      return rows(this, [
        ["Charger 1 state", e.charger_1.state],
        ["Charger 1 current", e.charger_1.battery_current, "A"],
        ["Charger 1 temp", e.charger_1.internal_temperature, "°C"],
        ["Charger 1 alarms", e.charger_1.alarms],
        ["Charger 2 state", e.charger_2.state],
        ["Charger 2 current", e.charger_2.battery_current, "A"],
        ["Charger 2 temp", e.charger_2.internal_temperature, "°C"],
        ["Charger 2 alarms", e.charger_2.alarms]
      ], true);
    }
    return rows(this, [
      ["Protection", e.bank.protection_flags],
      ["Cell delta", e.bank.cell_voltage_delta, "V"],
      ["High temp", e.bank.highest_temperature, "°C"],
      ["Low temp", e.bank.lowest_temperature, "°C"],
      ["Cycles", e.bank.cycles],
      ["FET state", e.bank.fet_state],
      ["Battery 1 cells", [e.battery_1.cell_1_voltage, e.battery_1.cell_2_voltage, e.battery_1.cell_3_voltage, e.battery_1.cell_4_voltage], "V"],
      ["Battery 2 cells", [e.battery_2.cell_1_voltage, e.battery_2.cell_2_voltage, e.battery_2.cell_3_voltage, e.battery_2.cell_4_voltage], "V"],
      ["Battery 1 temps", [e.battery_1.temperature_1, e.battery_1.temperature_2, e.battery_1.temperature_3], "°C"],
      ["Battery 2 temps", [e.battery_2.temperature_1, e.battery_2.temperature_2, e.battery_2.temperature_3], "°C"]
    ]);
  }

  toggleActive(name, active) {
    this.shadowRoot.querySelectorAll(`[data-flow="${name}"]`).forEach((el) => el.classList.toggle("active", active));
  }

  systemStatus() {
    const flags = this.state(this.config.entities.bank.protection_flags);
    if (flags && flags !== "OK") return "Check battery";
    return "System OK";
  }

  state(entityId) {
    const state = entityId ? this._hass?.states?.[entityId]?.state : undefined;
    if (state === undefined || state === null || state === "" || state === "unknown" || state === "unavailable") return undefined;
    return state;
  }

  num(entityId, fallback = NaN) {
    const raw = this.state(entityId);
    if (raw === undefined) return fallback;
    const value = Number(raw);
    return Number.isFinite(value) ? value : fallback;
  }

  entityText(entityId, unit, decimals = 1) {
    const value = this.num(entityId);
    return Number.isFinite(value) ? `${fmtNum(value, decimals)} ${unit}` : "--";
  }

  energy(entityId, fallbackId) {
    const value = this.num(entityId);
    if (Number.isFinite(value)) return `${fmtNum(value / (value > 100 ? 1000 : 1), 2)} ${value > 100 ? "kWh" : "kWh"}`;
    const fallback = this.num(fallbackId);
    return Number.isFinite(fallback) ? `${fmtNum(fallback, 2)} kWh` : "--";
  }

  setText(selector, value, allowEmpty = false) {
    const el = this.shadowRoot.querySelector(selector);
    if (el) el.textContent = allowEmpty ? String(value ?? "") : value || "--";
  }

  async startThree() {
    if (
      this._threeStarted ||
      !this.config.model_url ||
      window.matchMedia("(max-width: 650px)").matches
    ) return;
    this._threeStarted = true;
    const host = this.shadowRoot.querySelector("[data-three-host]");
    if (!host) return;
    try {
      const THREE = await import(this.config.three_module_url);
      const loaderModule = await import(this.config.gltf_loader_url);
      const T = normalizeThree(THREE);
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(35, host.clientWidth / host.clientHeight, 0.1, 100);
      const view = { rotationY: 0.62, pitch: -0.15, radius: 8.2, lookAtY: 0 };
      camera.position.set(
        Math.sin(view.rotationY) * view.radius,
        3.3 + view.pitch * 6,
        Math.cos(view.rotationY) * view.radius
      );
      camera.lookAt(0, view.lookAtY, 0);
      const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(host.clientWidth, host.clientHeight);
      host.appendChild(renderer.domElement);
      scene.add(new T.AmbientLight(0xffffff, 1.8));
      const key = new T.DirectionalLight(0xffffff, 2.6);
      key.position.set(4, 5, 6);
      scene.add(key);
      const renderScene = () => renderer.render(scene, camera);
      const loader = new loaderModule.GLTFLoader();
      loader.load(this.config.model_url, (gltf) => {
        const model = gltf.scene;
        model.rotation.y = 0;
        scene.add(model);
        const box = new T.Box3().setFromObject(model);
        const size = box.getSize(new T.Vector3()).length();
        const center = box.getCenter(new T.Vector3());
        model.position.sub(center);
        model.position.y += 0.02;
        model.scale.multiplyScalar(7.4 / size);
        model.updateMatrixWorld(true);
        const defaultPosition = camera.position.clone();
        const currentTarget = new T.Vector3(0, view.lookAtY, 0);
        const defaultTarget = currentTarget.clone();
        const originalMaterials = new Map();
        const engineLight = new T.SpotLight(0x4b9cd3, 0, 3, Math.PI / 3, 0.6, 2);
        const batteryLight = new T.SpotLight(0x4caf50, 0, 3, Math.PI / 3, 0.6, 2);
        const engineTarget = new T.Object3D();
        const batteryTarget = new T.Object3D();
        engineLight.position.set(-0.6, 2.25, 2.25);
        batteryLight.position.set(0.25, 1.85, -1.75);
        engineTarget.position.set(-0.6, 1.05, 2.25);
        batteryTarget.position.set(0.25, 0.65, -1.75);
        engineLight.target = engineTarget;
        batteryLight.target = batteryTarget;
        model.add(engineLight, batteryLight, engineTarget, batteryTarget);

        const restoreMaterials = () => {
          originalMaterials.forEach((material, mesh) => { mesh.material = material; });
          originalMaterials.clear();
          engineLight.intensity = 0;
          batteryLight.intensity = 0;
        };
        const highlightNodes = (names, color) => {
          model.traverse((object) => {
            if (!names.some((name) => object.name === name || object.name.startsWith(name))) return;
            object.traverse((child) => {
              if (!child.isMesh || originalMaterials.has(child)) return;
              originalMaterials.set(child, child.material);
              const materials = Array.isArray(child.material) ? child.material : [child.material];
              const highlighted = materials.map((material) => {
                const clone = material.clone();
                if (clone.emissive) {
                  clone.emissive.setHex(color);
                  clone.emissiveIntensity = 0.65;
                } else if (clone.color) {
                  clone.color.setHex(color);
                }
                return clone;
              });
              child.material = Array.isArray(child.material) ? highlighted : highlighted[0];
            });
          });
        };
        const nodeCenter = (names, fallback) => {
          const objects = [];
          model.traverse((object) => {
            if (names.some((name) => object.name === name || object.name.startsWith(name))) objects.push(object);
          });
          if (!objects.length) return model.localToWorld(fallback.clone());
          const bounds = new T.Box3();
          objects.forEach((object) => bounds.expandByObject(object));
          return bounds.getCenter(new T.Vector3());
        };
        const moveCamera = (position, target) => {
          const fromPosition = camera.position.clone();
          const fromTarget = currentTarget.clone();
          const started = performance.now();
          const frame = (now) => {
            const progress = Math.min(1, (now - started) / 420);
            const eased = 1 - Math.pow(1 - progress, 3);
            camera.position.lerpVectors(fromPosition, position, eased);
            currentTarget.lerpVectors(fromTarget, target, eased);
            camera.lookAt(currentTarget);
            renderScene();
            if (progress < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        };
        const focus = (name) => {
          restoreMaterials();
          if (name === "overview") {
            moveCamera(defaultPosition, defaultTarget);
            return;
          }
          const presets = {
            solar: {
              target: nodeCenter(["Cube_Material_0"], new T.Vector3(-0.6, 2.8, -1.8)),
              offset: new T.Vector3(3.8, 4.5, 3.3),
              highlight: () => highlightNodes(["Cube_Material_0"], 0xf59e0b)
            },
            engine: {
              target: model.localToWorld(new T.Vector3(-0.6, 1.15, 2.15)),
              offset: new T.Vector3(3.5, 2.2, 4.2),
              highlight: () => { engineLight.intensity = 4.2; }
            },
            hookup: {
              target: nodeCenter(["Hookup"], new T.Vector3(-1.67, 0.6, -3.5)),
              offset: new T.Vector3(-3.8, 2.1, -3.6),
              highlight: () => highlightNodes(["Hookup"], 0x61b8c8)
            },
            battery: {
              target: model.localToWorld(new T.Vector3(0.25, 0.72, -1.75)),
              offset: new T.Vector3(3.8, 2.0, -3.8),
              highlight: () => { batteryLight.intensity = 4.2; }
            }
          };
          const preset = presets[name];
          if (!preset) return;
          preset.highlight();
          moveCamera(preset.target.clone().add(preset.offset), preset.target);
        };
        this._modelController = { focus };
        camera.lookAt(currentTarget);
        this.shadowRoot.querySelector(".van-stage")?.classList.add("model-loaded");
        this.setText("[data-model-state]", "", true);
        renderScene();
      }, undefined, (error) => {
        console.error("Campervan model failed to load", error);
        this.setText("[data-model-state]", "Using fallback van outline");
      });
      renderScene();
      const resize = new ResizeObserver(() => {
        camera.aspect = host.clientWidth / host.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(host.clientWidth, host.clientHeight);
        renderScene();
      });
      resize.observe(host);
    } catch (error) {
      console.error("Campervan 3D renderer failed to start", error);
      host.remove();
      this.setText("[data-model-state]", "Using fallback van outline");
    }
  }

  getCardSize() {
    return 12;
  }
}

function mergeConfig(base, extra) {
  const output = Array.isArray(base) ? [...base] : { ...base };
  for (const [key, value] of Object.entries(extra || {})) {
    if (value && typeof value === "object" && !Array.isArray(value) && base[key] && typeof base[key] === "object") {
      output[key] = mergeConfig(base[key], value);
    } else {
      output[key] = value;
    }
  }
  return output;
}

function fmtNum(value, decimals = 0) {
  if (!Number.isFinite(value)) return "--";
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function sumSourceValues(inputs, key, fallback = NaN) {
  const values = inputs.map((input) => input[key]).filter(Number.isFinite);
  return values.length ? values.reduce((sum, value) => sum + value, 0) : fallback;
}

function averageReportingVoltage(inputs, fallback = NaN) {
  const values = inputs.map((input) => input.voltage).filter((value) => Number.isFinite(value) && value > 0.05);
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : fallback;
}

function batteryStatus(netPower, outputPower) {
  if (netPower > 20) return `Charging at ${fmtNum(Math.abs(netPower), 0)} W`;
  if (netPower < -20) return `Discharging at ${fmtNum(outputPower || Math.abs(netPower), 0)} W`;
  return "Battery idle";
}

function batteryPowerText(netPower) {
  if (netPower < -20) return "Battery supplying van";
  if (netPower > 20) return "Battery charging";
  return "Battery idle";
}

function operatingState(netPower) {
  if (netPower > 20) return "Charging";
  if (netPower < -20) return "Discharging";
  return "Idle";
}

function cleanTime(value) {
  if (!value) return "--";
  return value.replace(" remaining", "");
}

function rows(card, values, hideUnavailable = false) {
  return values.map(([label, entity, unit]) => {
    let value;
    if (Array.isArray(entity)) {
      value = entity.map((id) => card.entityText(id, unit || "", unit ? 3 : 1).replace(` ${unit}`, "")).filter((item) => item !== "--").join(" / ");
      if (value && unit) value += ` ${unit}`;
    } else {
      value = unit ? card.entityText(entity, unit, unit === "V" ? 3 : 1) : card.state(entity);
    }
    if (!value || value === "--") {
      if (hideUnavailable) return "";
      value = `<span class="unavailable">--</span>`;
    } else {
      value = escapeHtml(value);
    }
    return `<div class="metric-row"><span class="state">${escapeHtml(label)}</span><strong>${value}</strong></div>`;
  }).join("");
}

function chartSvg(series, colors, labels = []) {
  const width = 900;
  const height = 170;
  const padding = 22;
  const flat = series.flat().filter(Number.isFinite);
  const max = Math.max(1, ...flat);
  const count = Math.max(...series.map((item) => item.length), 1);
  const groupWidth = (width - padding * 2) / count;
  const barWidth = Math.max(3, groupWidth / (series.length + 1));
  let bars = "";
  series.forEach((values, seriesIndex) => {
    const normalized = values.length > 1 ? values : Array.from({ length: 12 }, (_, i) => i === 11 ? values[0] || 0 : 0);
    normalized.forEach((value, index) => {
      const h = Math.max(2, (Math.abs(value) / max) * (height - padding * 2));
      const x = padding + index * groupWidth + seriesIndex * barWidth;
      const y = height - padding - h;
      bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${Math.max(2, barWidth - 2).toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${colors[seriesIndex]}" opacity="0.82"/>`;
    });
  });
  const labelIndexes = labels.length ? [0, 6, 12, 18, 23] : [];
  const axisLabels = labelIndexes.map((index) => {
    const x = padding + (index + 0.5) * groupWidth;
    const anchor = index === 0 ? "start" : index === 23 ? "end" : "middle";
    return `<text x="${x.toFixed(1)}" y="${height - 5}" text-anchor="${anchor}" fill="#777" font-size="10">${escapeHtml(labels[index])}</text>`;
  }).join("");
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Energy history chart">
    <g stroke="#2a2a2a" stroke-width="1">
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}"/>
      <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}"/>
      <line x1="${padding}" y1="${height / 2}" x2="${width - padding}" y2="${height / 2}" opacity="0.7"/>
    </g>
    ${bars}
    ${axisLabels}
  </svg>`;
}

function emptyChart() {
  return chartSvg([[0], [0], [0], [0], [0]], ["#f59e0b", "#4caf50", "#e85668", "#4b9cd3", "#61b8c8"]);
}

function normalizeThree(module) {
  return {
    AmbientLight: module.AmbientLight || module.AmbientLight2,
    Box3: module.Box3 || module.Box32,
    DirectionalLight: module.DirectionalLight || module.DirectionalLight2,
    Object3D: module.Object3D || module.Object3D2,
    PerspectiveCamera: module.PerspectiveCamera || module.PerspectiveCamera2,
    Scene: module.Scene || module.Scene2,
    SpotLight: module.SpotLight || module.SpotLight2,
    Vector3: module.Vector3 || module.Vector32,
    WebGLRenderer: module.WebGLRenderer
  };
}

function iconVan() {
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 15V8.8c0-1 .8-1.8 1.8-1.8h9.7c.7 0 1.3.3 1.7.9L20 13v2"/>
    <path d="M3 15h18"/>
    <path d="M7 17.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"/>
    <path d="M17 17.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"/>
    <path d="M6 10h5"/>
    <path d="M13 10h3"/>
  </svg>`;
}

function vanSilhouette() {
  return `<svg viewBox="0 0 900 420" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="vanBody" x1="0" x2="1">
        <stop offset="0" stop-color="#2a2a2a"/>
        <stop offset="0.55" stop-color="#343434"/>
        <stop offset="1" stop-color="#242424"/>
      </linearGradient>
      <linearGradient id="glass" x1="0" x2="1">
        <stop offset="0" stop-color="#151515"/>
        <stop offset="1" stop-color="#222"/>
      </linearGradient>
    </defs>
    <ellipse cx="455" cy="345" rx="345" ry="34" fill="#0e0e0e" opacity="0.75"/>
    <path d="M145 280 L180 178 C188 154 208 139 234 137 L540 118 C581 116 616 132 641 164 L735 286 Z" fill="url(#vanBody)" stroke="#555" stroke-width="3"/>
    <path d="M230 158 L366 149 L366 224 L198 232 L217 174 C220 166 223 161 230 158 Z" fill="url(#glass)" stroke="#444" stroke-width="2"/>
    <path d="M386 148 L535 140 C563 139 586 150 604 172 L646 226 L386 224 Z" fill="url(#glass)" stroke="#444" stroke-width="2"/>
    <path d="M135 281 H756 L726 318 H116 Z" fill="#202020" stroke="#4a4a4a" stroke-width="3"/>
    <path d="M246 125 L545 108" stroke="#3d3d3d" stroke-width="8" stroke-linecap="round"/>
    <rect x="274" y="102" width="210" height="17" rx="5" fill="#252525" stroke="#4a4a4a"/>
    <circle cx="247" cy="318" r="48" fill="#111" stroke="#5a5a5a" stroke-width="6"/>
    <circle cx="247" cy="318" r="20" fill="#2b2b2b"/>
    <circle cx="604" cy="318" r="48" fill="#111" stroke="#5a5a5a" stroke-width="6"/>
    <circle cx="604" cy="318" r="20" fill="#2b2b2b"/>
    <path d="M667 236 H734" stroke="#666" stroke-width="5" stroke-linecap="round"/>
    <path d="M153 244 H203" stroke="#666" stroke-width="5" stroke-linecap="round"/>
  </svg>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

customElements.define("campervan-energy-dashboard", CampervanEnergyDashboard);
console.info(`%c CAMPERVAN-ENERGY-DASHBOARD %c ${CARD_VERSION} `, "color: white; background: #4caf50; font-weight: 700;", "color: white; background: #1b1b1b; font-weight: 700;");
