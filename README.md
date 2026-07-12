# Campervan Energy Dashboard

A single-page Home Assistant Lovelace custom card for a campervan power system. It replaces the existing `/lovelace/power` masonry view with a focused landscape dashboard built around the van, the battery bank, and the real energy inputs that already exist in Home Assistant.

The card is intentionally not a generic solar dashboard. Solar, alternator, and hookup are shown as inputs into the battery bank. The output side shows only aggregate campervan consumption.

## Features

- Single full-page Lovelace card with no sidebar or navigation.
- Dark charcoal palette matching the current dashboard style.
- Central van visual with active source flow overlays.
- Optional Three.js GLB/GLTF model support.
- Rendered-image fallback when the 3D model or Three.js cannot load.
- Combined battery bank hero with SOC shown only once.
- Individual Battery 1 and Battery 2 comparison strips.
- Detail drawers for battery health, solar diagnostics, and charger diagnostics.
- Charger 1 and Charger 2 max-current sliders.
- Entity mapping kept in one easy-to-edit config object.
- 24-hour recorder statistics chart when available, with a live snapshot fallback.

## HACS Installation

1. Add this repository to HACS as a custom repository.
2. Select category `Lovelace`.
3. Install `Campervan Energy Dashboard`.
4. Add the resource if HACS does not add it automatically:

```yaml
url: /hacsfiles/campervan-energy-dashboard/campervan-energy-dashboard.js
type: module
```

For manual installation, place `campervan-energy-dashboard.js` in:

```text
config/www/community/campervan-energy-dashboard/campervan-energy-dashboard.js
```

Then add:

```yaml
url: /local/community/campervan-energy-dashboard/campervan-energy-dashboard.js
type: module
```

## Lovelace Usage

Create or replace the `/lovelace/power` view with a panel view containing the custom card:

```yaml
type: panel
path: power
icon: mdi:battery-50
cards:
  - type: custom:campervan-energy-dashboard
```

The default entity mapping matches the entities currently used by your power view.

## Van Assets

Put your assets somewhere under Home Assistant `www`, for example:

```text
config/www/campervan-energy/van.glb
config/www/campervan-energy/van-render.png
```

Then configure:

```yaml
type: custom:campervan-energy-dashboard
model_url: /local/campervan-energy/van.glb
render_url: /local/campervan-energy/van-render.png
```

The rendered image is always used as a fallback if the model or Three.js import fails.

## Entity Overrides

Only override the entities you need to change:

```yaml
type: custom:campervan-energy-dashboard
entities:
  solar:
    pv_power: sensor.epever_pv_power
  bank:
    state_of_charge: sensor.fogstar_bms_state_of_charge
  charger_1:
    maximum_current_control: input_number.charger_1_max_charge_current
```

## Current Default Mapping

The built-in mapping includes:

- Solar: `sensor.epever_pv_voltage`, `sensor.epever_pv_current`, `sensor.epever_pv_power`, `sensor.epever_energy_generated_today`.
- Alternator: `sensor.charger_alternator_voltage`, `sensor.charger_alternator_current`, `sensor.charger_alternator_power`.
- Hookup: `sensor.charger_hookup_voltage`, `sensor.charger_hookup_current`, `sensor.charger_hookup_power`.
- Bank: `sensor.fogstar_bms_state_of_charge`, `sensor.fogstar_bms_voltage`, `sensor.battery_wattage`, `sensor.battery_in_wattage`, `sensor.battery_out_wattage`.
- Battery 1 and Battery 2: SOC, remaining capacity, voltage, current, status, cell voltages, and temperatures.
- Controls: `input_number.charger_1_max_charge_current`, `input_number.charger_2_max_charge_current`.

## Preview

Open `preview.html` in a browser for a mock preview using fake Home Assistant state data. `preview.svg` is a static rendered composition for quick visual review.

## Notes

- Optional charger diagnostics are hidden or shown as `--` when entities report `unknown` or `unavailable`.
- The history chart requests Home Assistant recorder statistics through the frontend WebSocket API. If recorder statistics are not available for the configured entities, the card displays a live snapshot fallback instead of inventing history.
- The battery operating state assumes positive `sensor.battery_wattage` means charging and negative means discharging, matching the supplied implementation note.
