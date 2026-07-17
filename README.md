# Campervan Energy Dashboard

A configurable Home Assistant Lovelace card for campervan, RV, motorhome, and off-grid vehicle energy systems.

The dashboard presents solar, alternator, and shore-power inputs around a combined battery bank. It can also show optional per-battery diagnostics, two optional charger channels, daily energy totals, current controls, and recent history.

No entity IDs, integration brands, local file paths, images, or 3D models are configured by default. Choose the entities that exist in your Home Assistant instance with the visual editor.

## Features

- Native Home Assistant visual editor with searchable, domain-filtered entity pickers.
- Vendor-neutral support for any integration that exposes suitable Home Assistant entities.
- Combined battery-bank overview with optional details for up to two individual batteries.
- Solar, alternator, and shore-power inputs with optional per-charger breakdowns.
- Optional current controls using `input_number` or `number` entities.
- Daily energy summary and a 24-hour history chart with a live snapshot fallback.
- Built-in generic van illustration that requires no external assets.
- Optional fallback image and optional custom GLB/GLTF model.
- Sections for unconfigured individual batteries, charger inputs, and controls are hidden automatically.

## Installation

### HACS

1. Add this repository to HACS as a custom repository in the `Dashboard` category.
2. Install **Campervan Energy Dashboard**.
3. Reload the browser if HACS asks you to.

HACS normally registers the JavaScript resource automatically.

### Manual

Copy `campervan-energy-dashboard.js` to:

```text
config/www/community/campervan-energy-dashboard/campervan-energy-dashboard.js
```

Add this dashboard resource:

```yaml
url: /local/community/campervan-energy-dashboard/campervan-energy-dashboard.js
type: module
```

## Add the card

The card is designed for a panel view:

```yaml
type: panel
path: energy
icon: mdi:solar-power
cards:
  - type: custom:campervan-energy-dashboard
```

Open the dashboard editor, edit the card, and select your entities. All fields are optional, so you can configure only the equipment and diagnostics available in your system.

Useful starting fields are:

- Battery bank: state of charge, voltage, net power, input power, and output power.
- Solar: PV power, voltage, current, and energy generated today.
- Alternator and shore power: combined power, voltage, and current.
- Energy summary: cumulative energy sensors measured in kWh.

## YAML configuration

The visual editor is recommended, but the same settings can be written in YAML. Entity IDs below are examples only:

```yaml
type: custom:campervan-energy-dashboard
entities:
  solar:
    pv_voltage: sensor.camper_solar_voltage
    pv_current: sensor.camper_solar_current
    pv_power: sensor.camper_solar_power
    generated_today: sensor.camper_solar_energy_today
  alternator:
    power: sensor.camper_alternator_power
  hookup:
    power: sensor.camper_shore_power
  bank:
    state_of_charge: sensor.camper_battery_state_of_charge
    voltage: sensor.camper_battery_voltage
    current: sensor.camper_battery_current
    net_power: sensor.camper_battery_power
    input_power: sensor.camper_battery_charge_power
    output_power: sensor.camper_battery_discharge_power
  summary:
    solar_total: sensor.camper_solar_energy
    battery_input_total: sensor.camper_battery_energy_in
    battery_output_total: sensor.camper_battery_energy_out
```

You can add individual battery and charger mappings through the visual editor or under `battery_1`, `battery_2`, `charger_1`, and `charger_2`.

## Optional visuals

The built-in vector van is the default and does not require any downloads or local assets.

For a custom rendered image, place it under Home Assistant's `www` directory and set `render_url`:

```yaml
type: custom:campervan-energy-dashboard
render_url: /local/campervan-energy/van.png
```

A custom GLB/GLTF model is opt-in. Configure all three URLs:

```yaml
type: custom:campervan-energy-dashboard
model_url: /local/campervan-energy/van.glb
three_module_url: /local/campervan-energy/three.module.js
gltf_loader_url: /local/campervan-energy/GLTFLoader.js
```

The modules must be browser-compatible ES modules that export Three.js and `GLTFLoader`. The card scales and centers the model from its bounds and does not require integration-specific mesh or node names. If any model asset is missing or cannot load, the generic illustration remains visible.

## Entity behavior

- Sensor pickers accept `sensor` entities.
- Charger current controls accept `input_number` and `number` entities.
- Missing, `unknown`, and `unavailable` values display as unavailable without inventing data.
- Positive bank `net_power` means charging; negative means discharging. Use a template sensor to invert the sign if your integration reports the opposite convention.
- Daily totals should report energy in kWh. Power readings should report watts, current amps, voltage volts, capacity amp-hours, and temperature degrees Celsius.
- The history chart uses Home Assistant's history API for the configured power sensors and falls back to current values when history is unavailable.

## Updating

After replacing the JavaScript file, reload the dashboard resource or perform a hard refresh so the browser does not continue using a cached copy.
