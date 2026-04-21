let navigateFunction: any;

export const setNavigate = (navigate: any) => {
  navigateFunction = navigate;
};

export const navigateTo = (path: string) => {
  if (navigateFunction) {
    navigateFunction(path);
  }
};