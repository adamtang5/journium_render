const Role = ({ user }) => {
    return (
        <div className={`role role-${(user.id % 5 === 0) ? 5 : user.id % 5}`}>
            {user.Role.name}
        </div>
    )
};

export default Role;
