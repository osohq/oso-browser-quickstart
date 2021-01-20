import("oso").catch(e =>
    console.error("Error importing `oso`:", e)
).then(m => {
    oso = new m.Oso();
    oso.loadStr('allow("steve", "get", "car");');
    oso.isAllowed("steve","get","car").then(r => console.log(r));
    oso.isAllowed("sam","get","car").then(r => console.log(r));
    window.oso = o;
})