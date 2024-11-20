const handleDownload = () => {
  const fileContent = "";
  const blob = new Blob([fileContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "document.txt";
  link.click();

  URL.revokeObjectURL(url);
};

export default handleDownload;
