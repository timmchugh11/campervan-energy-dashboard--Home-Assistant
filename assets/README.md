# Assets

Place optional Home Assistant-served assets in your HA `config/www/campervan-energy/` directory:

```text
van.glb
van-render.png
```

The card defaults to:

```yaml
model_url: /local/campervan-energy/van.glb
render_url: /local/campervan-energy/van-render.png
```

Do not put large binary model files in this repository unless you intend to distribute them through HACS.
