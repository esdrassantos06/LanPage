"use client";

import React from "react";
import Logos from "./CompaniesSvg";

export default function Companies() {
  return (
    <div className="flex items-center gap-14">
      <Logos.TechRadar fill="#fff" />
      <Logos.TerraForm fill="#fff" />
      <Logos.Amazon fill="#fff" />
      <Logos.Valiantys fill="#fff" />
      <Logos.Sequelize fill="#fff" />
    </div>
  );
}
