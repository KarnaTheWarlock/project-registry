#!/usr/bin/env node
import { program } from "commander"

program
.name("prl")
.description("Project Registry Linker - Manage your projects across directories")


program.command("init").action(() => {
    console.log("runnung: init cmd")
})
program.parse()
