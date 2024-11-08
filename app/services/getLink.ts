export const getLink = (data: string) => {
    const title = data.toLowerCase();
    if (title.includes("web")) {
      return "services/web-development";
    } else if (title.includes("digital")) {
      return "services/digital-solutions";
    } else if (title.includes("mobile")) {
      return "services/mobile-app-development";
    // } else if (title.includes("graphic")) {
    //   return "services/graphics-designing";
    // } else if (title.includes("erp")) {
    //   return "services/erp";
    // } else if (title.includes("ar")) {
    //   return "services/ar-vr";
    } else if (title.includes("game")) {
      return "services/game-development";
    } else if (title.includes("devops")) {
      return "services/devops-solutions";
    } else if (title.includes("cyber")) {
      return "services/cybersecurity-service";
    // } else if (title.includes("content-creation")) {
    //   return "services/content-creation";
    // } else if (title.includes("management-services")) {
    //   return "services/management-services";
    } else {
      return "services/";
    }
  };