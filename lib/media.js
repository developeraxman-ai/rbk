export function getOptimizedImageUrl(url, transformation = "f_auto,q_auto,w_1400") {
  if (!url?.includes("/image/upload/")) {
    return url;
  }

  return url.replace("/image/upload/", `/image/upload/${transformation}/`);
}

export function getOptimizedVideoUrl(url, transformation = "q_auto,f_auto") {
  if (!url?.includes("/video/upload/")) {
    return url;
  }

  return url.replace("/video/upload/", `/video/upload/${transformation}/`);
}
