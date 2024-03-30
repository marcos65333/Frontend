import { Box, Text, Input } from "@chakra-ui/react";
import { FcMms } from "react-icons/fc";

const AddOptions = ({ onImageSelect }) => {
  const handleImageSelect = (e) => {
    const selectedImage = e.target.files[0];
    onImageSelect(selectedImage);
  };

  return (
    <div className="grid grid-cols-3 mt-2 border-2 p-2 rounded-lg items-center">
      <Text>Agrega a tu post</Text>
      <Box>
        <label htmlFor="file-upload" className="cursor-pointer">
          <FcMms size={32} />
        </label>
        <Input
          id="file-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageSelect}
          display="none"
        />
      </Box>
    </div>
  );
};

export default AddOptions;
