import LikeButton from "./LikeButton";
function ProfileCard({ name, role, skills , isOnline}) {
        return (
            <>
                <h2>{name}</h2>
                <p>{role}</p>
                <p>Skills: {skills.join(", ")}</p>
                <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
                <LikeButton />
            </>
        )
}
export default ProfileCard;