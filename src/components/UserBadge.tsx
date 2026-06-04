import UserIcon from "/src/assets/user.png";

interface UserBadgeProps {
  name: string;
  surname: string;
  userPictureUrl?: string;
}

export const UserBadge = ({
  name,
  surname,
  userPictureUrl,
}: UserBadgeProps) => {
  const formattedName = `${name.slice(0, 1).toUpperCase()}. ${surname}`;

  return (
    <div className="flex justify-between items-center gap-2">
      <img
        src={userPictureUrl ?? UserIcon}
        alt="user picture"
        className="h-4 md:h-7 bg-ceramic-300 rounded-full "
      />
      <div className="rounded-lg border-2 border-ink-400 px-2 text-ceramic-50 bg-ceramic-300 text-xs md:text-sm">
        {formattedName}
      </div>
    </div>
  );
};
