export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      doctor_especialidades: {
        Row: {
          created_at: string | null
          doctor_id: string | null
          especialidad_id: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          doctor_id?: string | null
          especialidad_id?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          doctor_id?: string | null
          especialidad_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "doctor_especialidades_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "doctor_especialidades_especialidad_id_fkey"
            columns: ["especialidad_id"]
            isOneToOne: false
            referencedRelation: "especialidades"
            referencedColumns: ["id"]
          },
        ]
      }
      doctor_servicios: {
        Row: {
          created_at: string | null
          doctor_id: string | null
          id: string
          servicio_id: string | null
        }
        Insert: {
          created_at?: string | null
          doctor_id?: string | null
          id?: string
          servicio_id?: string | null
        }
        Update: {
          created_at?: string | null
          doctor_id?: string | null
          id?: string
          servicio_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doctor_servicios_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "doctor_servicios_servicio_id_fkey"
            columns: ["servicio_id"]
            isOneToOne: false
            referencedRelation: "servicios"
            referencedColumns: ["id"]
          },
        ]
      }
      doctores: {
        Row: {
          biografia: string | null
          certificaciones: string[] | null
          created_at: string | null
          educacion: string[] | null
          experiencia: string | null
          foto: string | null
          has_detailed_profile: boolean | null
          horarios_atencion: string | null
          id: string
          logros: string[] | null
          nombre: string
          slug: string
          titulo: string
          ubicacion_consultorio: string | null
          updated_at: string | null
          whatsapp: string | null
        }
        Insert: {
          biografia?: string | null
          certificaciones?: string[] | null
          created_at?: string | null
          educacion?: string[] | null
          experiencia?: string | null
          foto?: string | null
          has_detailed_profile?: boolean | null
          horarios_atencion?: string | null
          id?: string
          logros?: string[] | null
          nombre: string
          slug: string
          titulo: string
          ubicacion_consultorio?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Update: {
          biografia?: string | null
          certificaciones?: string[] | null
          created_at?: string | null
          educacion?: string[] | null
          experiencia?: string | null
          foto?: string | null
          has_detailed_profile?: boolean | null
          horarios_atencion?: string | null
          id?: string
          logros?: string[] | null
          nombre?: string
          slug?: string
          titulo?: string
          ubicacion_consultorio?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      especialidades: {
        Row: {
          created_at: string | null
          descripcion: string
          descripcion_detallada: string | null
          icon_name: string
          id: string
          servicios: string[] | null
          slug: string
          titulo: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          descripcion: string
          descripcion_detallada?: string | null
          icon_name: string
          id?: string
          servicios?: string[] | null
          slug: string
          titulo: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          descripcion?: string
          descripcion_detallada?: string | null
          icon_name?: string
          id?: string
          servicios?: string[] | null
          slug?: string
          titulo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      servicios: {
        Row: {
          beneficios: string[] | null
          created_at: string | null
          descripcion_completa: string
          descripcion_corta: string
          horarios: string
          icon_name: string
          id: string
          imagen: string | null
          incluye: string[] | null
          requisitos: string[] | null
          slug: string
          tecnologia: string[] | null
          titulo: string
          updated_at: string | null
        }
        Insert: {
          beneficios?: string[] | null
          created_at?: string | null
          descripcion_completa: string
          descripcion_corta: string
          horarios: string
          icon_name: string
          id?: string
          imagen?: string | null
          incluye?: string[] | null
          requisitos?: string[] | null
          slug: string
          tecnologia?: string[] | null
          titulo: string
          updated_at?: string | null
        }
        Update: {
          beneficios?: string[] | null
          created_at?: string | null
          descripcion_completa?: string
          descripcion_corta?: string
          horarios?: string
          icon_name?: string
          id?: string
          imagen?: string | null
          incluye?: string[] | null
          requisitos?: string[] | null
          slug?: string
          tecnologia?: string[] | null
          titulo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
