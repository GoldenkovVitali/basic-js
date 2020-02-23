module.exports = function createDreamTeam(members) {
var result=[];
if (Array.isArray(members)===true) {
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
    members[i]=members[i].trim();
    result[i]=members[i][0].toUpperCase()
    }
    }
    return result.sort().join('')
    }
    return false
    }