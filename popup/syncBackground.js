import { getStorage } from "../common/storageHelper.js"
document.body.style.backgroundImage = await getStorage("bgImage")