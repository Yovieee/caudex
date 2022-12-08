<template>
    <h1>Users</h1>
    
</template>
<script>
export default {
    name: "AdminUsersComponent",
    data: () => ({
        users: [],
        headers: [
            { text: 'ID', value: 'id' },
            { text: 'Photo', value: 'user_photo' },
            { text: 'Name', value: 'user_name' },
            { text: 'Birthdate', value: 'user_birthdate' },
            { text: 'Email', value: 'user_email' },
            { text: 'Role', value: 'user_role' },
            { text: 'Verification', value: 'user_verification' },
            { text: 'Actions', value: 'user_actions' }
        ],
    }),
}
</script>