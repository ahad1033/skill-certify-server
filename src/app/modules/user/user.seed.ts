import bcrypt from "bcrypt";

import config from "../../config";
import { User } from "./user.model";

const superUser = {
  firstName: "SkillCertify",
  lastName: "Admin",
  email: config.admin_email,
  password: config.admin_password,
  role: "admin",
};

export const seedSuperAdmin = async () => {
  const isSuperAdminExits = await User.findOne({ role: "admin" });

  const hashedPassword = await bcrypt.hash(
    superUser.password,
    Number(config.bcrypt_salt_rounds)
  );

  const superAdminDataWithHashedPass = {
    ...superUser,
    password: hashedPassword,
  };

  if (!isSuperAdminExits) {
    await User.create(superAdminDataWithHashedPass);
    // console.log("Super admin created successfully!");
  }
};
