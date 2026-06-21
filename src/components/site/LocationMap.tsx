export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-sm border border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]">
      <iframe
        title="Mapa — Malíkovský Dvůr"
        src="https://mapy.com/cs/zakladni?x=15.0133094444&y=49.0939975&z=17&source=firm&id=2210631&widgetFirmy=2210631&frame=1"
        className="block w-full aspect-[5/4]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
