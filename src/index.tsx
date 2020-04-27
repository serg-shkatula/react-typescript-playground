import {USER_EXPERIENCE} from "./acquiring/";
import {acquire} from "acquiring";

acquire(USER_EXPERIENCE)
    .catch((e) => console.log(e))

console.log(USER_EXPERIENCE.dependencyTree)