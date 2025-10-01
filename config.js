
module.exports = {
  // Bot Configuration
  token: process.env.DISCORD_BOT_TOKEN,
  prefix: '!',
  enablePrefix: true, // Set to false to disable prefix commands
  
  // Bot Activity
  activity: {
    name: '/help | https://github.com/Unknownzop/MusicBot',
    type: 'LISTENING' // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
  },
  
  // Lavalink Configuration
  lavalink: {
    nodes: [{
      name: 'main',
      url: 'lava-v4.ajieblogs.eu.org:80',
      auth: 'https://dsc.gg/ajidevserver',
      secure: false,
    }],
    defaultSearchEngine: 'youtube_music'
  },
  
  // Emojis
  emojis: {
    play: '▶️',
    pause: '⏸️',
    resume: '▶️',
    skip: '⏭️',
    stop: '⏹️',
    queue: '📜',
    shuffle: '🔀',
    loop: '🔄',
    volume: '🔊',
    nowplaying: '🎵',
    success: '✅',
    error: '❌',
    warning: '⚠️',
    music: '🎵',
    user: '👤',
    duration: '⏱️',
    position: '📍',
    ping: '🏓',
    stats: '📊',
    invite: '📨',
    support: '💬',
    uptime: '⌚',
    servers: '🌐',
    users: '👥',
    players: '🎵',
    playlist: '📋'
  },
  
  // URLs
  urls: {
    support: process.env.SUPPORT_SERVER || 'https://discord.gg/BWDhF2sGRp',
    github: 'https://github.com/Unknownzop/MusicBot'
  },
  
  // Express Server
  express: {
    port: 3000,
    host: '0.0.0.0'
  }
};
