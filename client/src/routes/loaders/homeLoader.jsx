import { preloadImage } from "../../utils/preloadImage";
import FotoDiri from "../../assets/images/Foto-diri-cropped3.webp";
import FotoDiri2 from "../../assets/images/Foto-diri-standing-zoomed2-removebg.webp";
export async function homeLoader() {
  await preloadImage(FotoDiri);
  await preloadImage(FotoDiri2);
  return null;
}
