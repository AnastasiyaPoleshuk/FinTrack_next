"use server";

import prisma from "@/src/utils/prisma";
import { SignupFormFieldType } from "../_components/type";

export const createUser = async ({ email, password }: SignupFormFieldType) => {
  try {
    if (!email || !password) return;

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return user;
  } catch (error: unknown) {
    console.error("failed registration", error);
    return { error: "failed registration" };
  }
};
