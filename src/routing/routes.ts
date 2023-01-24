import { Comments } from "pages/comments/Comments";
import { Users } from "pages/users/Users";
import { locations, RouterProps } from "types/types";

export const routes: RouterProps[] = [
  {
    path: locations.MAIN,
    component: Users,
    name: "users",
  },
  {
    path: locations.COMMENTS,
    component: Comments,
    name: "comments",
  },
];
