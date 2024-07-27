"use client";
import React, { useState } from "react";
import { representativeData } from "@/lib/data";
import { labourData } from "@/lib/labour";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LruLabourData from "./LruLabourData";

const LruLabour = () => {
  const id = "1";
  const representative = representativeData.find((rep) => rep.id === id);
  const [labourers, setLabourers] = useState(representative?.Labour || []);
  console.log(labourers);
  const [newLabourer, setNewLabourer] = useState("");
  const [editLabourer, setEditLabourer] = useState<string | null>(null);
  const [editedName, setEditedName] = useState("");

  const handleDelete = (labourerToDelete: string) => {
    setLabourers(labourers.filter((labourer) => labourer !== labourerToDelete));
  };

  const handleAdd = () => {
    if (newLabourer.trim() && !labourers.includes(newLabourer)) {
      setLabourers([...labourers, newLabourer]);
      setNewLabourer("");
    }
  };

  const handleEdit = (labourerToEdit: string) => {
    setEditLabourer(labourerToEdit);
    setEditedName(labourerToEdit);
  };

  const handleUpdate = () => {
    if (editedName.trim() && !labourers.includes(editedName)) {
      setLabourers(
        labourers.map((labourer) =>
          labourer === editLabourer ? editedName : labourer
        )
      );
      setEditLabourer(null);
      setEditedName("");
    }
  };

  return (
    <div className="w-100">
      <h3 className="font-bold text-lg flex justify-center">
        The List of all the Labourers
      </h3>

      <div className="mb-4 flex items-center gap-2">
        <Input
          placeholder="Enter new labourer"
          value={newLabourer}
          onChange={(e) => setNewLabourer(e.target.value)}
        />
        <Button onClick={handleAdd}>Add Labourer</Button>
      </div>

      {editLabourer && (
        <div className="mb-4 flex items-center gap-2">
          <Input
            placeholder="Edit labourer name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <Button onClick={handleUpdate}>Update</Button>
          <Button variant="destructive" onClick={() => setEditLabourer(null)}>
            Cancel
          </Button>
        </div>
      )}

      <Table>
        <TableCaption className="w-100">
          Labourers managed by representative with ID {id}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Labourer</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {labourers.map((labourer, index) => (
            <TableRow key={index}>
              <TableCell>{labourer}</TableCell>
              <TableCell className="flex gap-2 justify-center items-center">
                <Button>
                  View Data
                </Button>
                <Button onClick={() => handleEdit(labourer)}>
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(labourer)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};



export default LruLabour;
