import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("renders the technical foundation and safety boundary", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("HLA Twin est prêt pour l’implémentation.");
    expect(html).toContain("Le frontend fonctionne.");
    expect(html).toContain("validation humaine obligatoire");
  });
});
