import { rest } from "msw";

const baseURL = "https://django-rest-module.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 4,
        "username": "mario",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 4,
        "profile_image": "https://res.cloudinary.com/dayy03gfs/image/upload/v1/media/images/WIN_20150920_21_16_30_Pro_ioyed9"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];