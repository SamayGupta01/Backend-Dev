import fs from "fs";

function newMember(name, email, type) {
    try {
        let members = [];

        // Read existing members if file exists
        if (fs.existsSync("members.json")) {
            const data = fs.readFileSync("members.json", "utf-8");

            // Handle empty file safely
            members = data ? JSON.parse(data) : [];

            const memberExists = members.some(
                member => member.email === email
            );

            if (memberExists) {
                console.log("Member already exists");
                return;
            }
        }

        const memberObj = {
            id: Date.now(),
            name,
            email,
            type
        };

        members.push(memberObj);

        fs.writeFileSync(
            "members.json",
            JSON.stringify(members, null, 2)
        );

        console.log("Member added successfully");

    } catch (err) {
        console.error("Some error occurred:", err.message);
    }
}

export default newMember;
