try {
  const t = { url: undefined };
  if (t.url) {
    console.log(new URL(t.url).host);
  } else {
    console.log("Skipped correctly");
  }
} catch (e) {
  console.error("Failed:", e);
}

try {
  console.log(new URL("https://www.jh.cz").host);
} catch (e) {
  console.error("Failed jh:", e);
}
