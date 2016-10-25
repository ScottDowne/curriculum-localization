import Strings from "./strings.json";

class Text {
  static get data() {
    return Strings;
  }

  static replace(str, replacements) {
    for(const key in replacements) {
      let replacement = replacements[key];
      str = str
      .replace("{ " + key + " }", replacement)
      .replace("{" + key + " }", replacement)
      .replace("{ " + key + "}", replacement)
      .replace("{" + key + "}", replacement);
    }

    return str;
  }

  static html(str) {
    return { __html: str };
  }
}

export default Text;
