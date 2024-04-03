// icon 폴더 안에 있는 모든 SVG 파일을 가져옵니다.
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);

// 실제 icon 파일 경로
export const svgFiles = requireAll(
  require.context("../img/icon", true, /\.svg$/)
);

// 파일 이름
export const fileNames = svgFiles.map(
  (filePath) => filePath.split("/").pop().split(".")[0]
);
