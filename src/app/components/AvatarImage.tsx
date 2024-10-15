import Image from "next/image";
import { useStore } from "@/store/store";

import avatar from "../css/avatar.module.css";
import avatarImg from "../img/avatarImg.png";

export default function AvatarImage({}) {
    const { isAvatarActive } = useStore();

    const mostrarAvatarClass = isAvatarActive ? `${avatar.avatar} ${avatar.avatarActivo}` : `${avatar.avatar}`;
    return (
        <Image 
          src={avatarImg}
          alt="avatar"
          width={400}
          height={450}
          className={mostrarAvatarClass}
        />
    )
}