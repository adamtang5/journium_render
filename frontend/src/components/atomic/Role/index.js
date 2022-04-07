const Role = ({ user }) => {
    return (
        <span className={`role role-${(user.id % 5 === 0) ? 5 : user.id % 5}`}>
            {user.Role.name}
        </span>
    )
};

export default Role;
