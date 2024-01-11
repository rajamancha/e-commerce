import { supabase } from "@/lib/supabase-client";

export const fetchProducts = async () => {
  return supabase.from("products").select("*");
};

export const deleteProducts = async (productId: number) => {
  return supabase.from("products").delete().eq("id", productId);
};

// 973a1