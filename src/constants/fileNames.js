// icon 폴더 안에 있는 모든 SVG 파일을 가져오는 함수 정의
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);

// require.context를 사용하여 SVG 파일들을 가져옴
export const svgFiles = requireAll(
  require.context("../img/icon", true, /\.svg$/)
);

// 파일 경로에서 파일 이름만 추출하여 배열로 만드는 작업
export const fileNames = svgFiles.map(
  (filePath) => filePath.split("/").pop().split(".")[0]
);
