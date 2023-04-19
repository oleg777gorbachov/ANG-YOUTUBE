interface ThumbnailI {
  url: string;
  width: string;
  height: string;
}

export interface YouTubeVideoSearchI {
  kind: string;
  items: (YouTubeVideoShortI | YoutubeChannelShortI | YoutubePlaylistI)[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface YouTubeGetVideoI {
  kind: string;
  items: YouTubeVideoI[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface YouTubeVideoI {
  kind: 'youtube#video';
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailI;
      medium: ThumbnailI;
      high: ThumbnailI;
      standard: ThumbnailI;
      maxres: ThumbnailI;
    };
    tags: string[];
    categoryId: string;
    liveBroadcastContent: 'none' | 'live';
    publishTime: string;
  };
  contentDetails: {
    duration: string;
    dimension: '2d';
    definition: 'hd';
    caption: 'true' | 'false';
    licensedContent: boolean;
    projection: 'rectangular';
  };
  statistics: {
    viewCount: number;
    likeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
}

export interface YouTubeVideoShortI {
  kind: string;
  id: {
    kind: 'youtube#video';
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailI;
      medium: ThumbnailI;
      high: ThumbnailI;
      standard: ThumbnailI;
    };
    channelTitle: string;
    liveBroadcastContent: 'none' | 'live';
    publishTime: string;
  };
}

export interface YouTubeVideosI {
  pageInfo: {
    totalResults: number;
    resultsPerPage: 50;
  };
  items: YouTubeVideoShortI[];
}

export interface YoutubeChannelShortI {
  kind: string;
  id: {
    kind: 'youtube#channel';
    channelId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: 'none' | 'live';
    publishedAt: string;
    publishTime: string;
    thumbnails: {
      default: ThumbnailI;
      medium: ThumbnailI;
      high: ThumbnailI;
    };
  };
}

export interface YoutubeChannelI {
  kind: 'youtube#channel';
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: ThumbnailI;
      medium: ThumbnailI;
      high: ThumbnailI;
    };
  };
  statistics: {
    viewCount: number;
    subscriberCount: number;
    hiddenSubscriberCount: boolean;
    videoCount: number;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      unsubscribedTrailer: string;
    };
    image: { bannerExternalUrl: string };
  };
}

export interface YoutubeChannelResponseI {
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeChannelI[];
}

export interface YoutubePlaylistI {
  kind: string;
  id: {
    kind: 'youtube#playlist';
    playlistId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailI;
      medium: ThumbnailI;
      high: ThumbnailI;
    };
    channelTitle: string;
    liveBroadcastContent: 'none' | 'live';
    publishTime: string;
  };
}
