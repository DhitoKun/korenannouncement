module.exports = (client) => {
  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get('1012612266463612948')
    channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get(process.env.GUILD_ID)
  updateMembers(guild)
}