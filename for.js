client.on('ready',async () => {
  client.channels.find(ch => ch.id === "521197760993689600" && ch.type === 'voice').join();
});
