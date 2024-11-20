export const getLink = (data: string) => {
    const title = data.toLowerCase();
    if (title.includes("web")) {
      return "/services/web-development";
    } else if (title.includes("digital")) {
      return "/services/digital-solutions";
    } else if (title.includes("mobile")) {
      return "/services/mobile-app-development";
    } else if (title.includes("cloud")) {
      return "/services/cloud-services";
    } else if (title.includes("enterprise")) {
      return "/services/custom-enterprise-solutions";
    } else if (title.includes("staff")) {
      return "/services/staff-augmentation";
    } else if (title.includes("game")) {
      return "/services/game-development";
    } else if (title.includes("devops")) {
      return "/services/devops-solutions";
    } else if (title.includes("cyber")) {
      return "/services/cybersecurity-service";
    // } else if (title.includes("content-creation")) {
    //   return "services/content-creation";
    // } else if (title.includes("management-services")) {
    //   return "services/management-services";
    } else {
      return "services/";
    }
  };
