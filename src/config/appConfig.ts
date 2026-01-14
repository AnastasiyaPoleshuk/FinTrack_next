export const appConfig = {
  title: "FinTrack",
  description: "app for tracking and visualizing personal finances",
  navItems: [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/accounts",
      label: "Accounts",
    },
    {
      href: "/categories",
      label: "Categories",
    },
  ],
  commonFieldRules: { required: true, message: "required field" },
};
