// date format: d MMM yyyy, H:mm, time should be specifed based on UTC time

export type EventData = {
  id: string;
  title: string;
  isActive?: boolean;
  validTill: string;
  bodyText: string | string[];
  buttons: {
    text: string;
    link: string;
    newTab: boolean;
  }[];
};

export const homeEventsData: EventData[] = [];

export const appEventsData: EventData[] = [
  // {
  //   id: "glp-manager-updates",
  //   title: "ZLP Manager Updates",
  //   isActive: true,
  //   validTill: "18 Dec 2022, 12:00",
  //   bodyText:
  //     "The ZLP Manager address has been updated based on the linked post, existing users will need to approve the new ZLP Manager to buy ZLP tokens.",
  //   buttons: [
  //     {
  //       text: "Read More",
  //       link: "https://medium.com/@zmx.io/zmx-deployment-updates-nov-2022-16572314874d",
  //       newTab: true,
  //     },
  //   ],
  // },
];
