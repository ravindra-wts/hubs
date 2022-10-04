import { supabase } from "../supabaseClient";

export const insertData = async (name, avatarId, joining_timestamp) => {
  const dataToBeInserted = {
    join_room_timestamp: joining_timestamp,
    room_url: window.location.href,
    room_name: window.location.href.split("/")[4] ? window.location.href.split("/")[4] : "local",
    leave_room_timestamp: null,
    name: name,
    avatar_id: avatarId
  };
  const { data, error } = await supabase.from("user-logs").insert([dataToBeInserted]);
  if (data) {
    console.log("inserted data", data[0]);
    sessionStorage.setItem("log-data", JSON.stringify(data[0]));
  } else console.log("error while inserting data", error);
};

export const updateData = async id => {
  console.log("updateing data");
  const { data, error } = await supabase
    .from("user-logs")
    .update({ leave_room_timestamp: new Date() })
    .eq("log_id", id);

  if (data) {
    // console.log("updated data", data);
    return { data };
  } else {
    // console.log("error while updating data", error);
    return { error };
  }
};
