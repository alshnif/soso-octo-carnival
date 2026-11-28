import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";
import indexHtml from "../index.html?raw";

function parseIndexHtml() {
  return new DOMParser().parseFromString(indexHtml, "text/html");
}

describe("App", () => {
  it("renders the Arabic welcome heading with the project name", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "مرحباً — Soso Octo Carnival",
      }),
    ).toBeVisible();
  });

  it("preserves the starter instructions", () => {
    render(<App />);

    const main = screen.getByRole("main");
    expect(main).toHaveTextContent("هذا مشروع بداية مبني بـ React + Vite.");
    expect(main).toHaveTextContent("قم بالتعديل في src/ ثم شغّل npm run dev.");
  });

  it("provides one main landmark named by its visible heading", () => {
    render(<App />);

    expect(screen.getAllByRole("main")).toHaveLength(1);
    const main = screen.getByRole("main", {
      name: "مرحباً — Soso Octo Carnival",
    });
    const heading = within(main).getByRole("heading", { level: 1 });

    expect(main).toHaveAttribute("aria-labelledby", heading.id);
    expect(main).toContainElement(heading);
    expect(within(main).getByText("src/")).toBeVisible();
    expect(within(main).getByText("npm run dev")).toBeVisible();
  });

  it.each(["src/", "npm run dev"])(
    "marks %s as left-to-right semantic code",
    (snippet) => {
      render(<App />);

      const code = screen.getByText(snippet);
      expect(code.tagName).toBe("CODE");
      expect(code).toHaveAttribute("dir", "ltr");
    },
  );

  it.each(["Soso Octo Carnival", "React + Vite"])(
    "isolates the English text %s from the Arabic direction",
    (text) => {
      render(<App />);

      const englishText = screen.getByText(text);
      expect(englishText.tagName).toBe("BDI");
      expect(englishText).toHaveAttribute("lang", "en");
      expect(englishText).toHaveAttribute("dir", "ltr");
    },
  );
});

describe("index.html", () => {
  it("sets Arabic and right-to-left direction on the document root", () => {
    const html = parseIndexHtml().documentElement;

    expect(html.getAttribute("lang")).toBe("ar");
    expect(html.getAttribute("dir")).toBe("rtl");
  });

  it("uses the same project name in the document title and app heading", () => {
    const document = parseIndexHtml();
    render(<App />);

    expect(document.title).toBe("Soso Octo Carnival");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      document.title,
    );
  });

  it("describes the Arabic React and Vite starter with the correct name", () => {
    const description = parseIndexHtml().querySelector(
      'meta[name="description"]',
    );

    expect(description).not.toBeNull();
    expect(description.getAttribute("content")).toBe(
      "Soso Octo Carnival — مشروع بداية مبني باستخدام React وVite بواجهة عربية.",
    );
  });
});
