<div className="flex justify-center items-center gap-2 border-8  rounded-xl p-2 bg-white" onClick={onOpen}>
< Picture user={user} show={true} />
<input type=" text" placeholder={`What's on your mind? ${user[0]?.full_name}`} className="w-80 h-14 p-2 border-2 rounded-full" />
<hr />
</div>

<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>
  <ModalHeader textAlign={"center"}>Create post</ModalHeader>
  <ModalCloseButton />
  <ModalBody>
    <FormControl>
      < Picture user={user} />
      <Textarea marginTop={"5px"} placeholder={`What's on your mind? ${user[0]?.full_name}`} />
      <AddOptions />
    </FormControl>
  </ModalBody>
  <ModalFooter>
    <Button className=" border-2 w-96 bg-gray-600">Post</Button>
  </ModalFooter>
</ModalContent>
</Modal>