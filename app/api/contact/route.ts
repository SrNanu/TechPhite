import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, telefono, mensaje, rubro, empresa, aseguradora, institucion } = body;

    // Create transporter inside handler so env vars are always resolved at request time
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Build a context-aware subject line based on which form sent it
    const origen = rubro ?? empresa ?? aseguradora ?? institucion ?? 'Web';
    const subject = `🔔 Nuevo contacto TechPhite — ${origen}`;

    // Elegant HTML email body
    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:600px;width:100%;">
                
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#f97316,#e11d48);padding:32px 40px;text-align:center;">
                    <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.8);letter-spacing:2px;text-transform:uppercase;font-weight:600;">TechPhite</p>
                    <h1 style="margin:8px 0 0;font-size:24px;color:#ffffff;font-weight:700;">Nuevo mensaje recibido</h1>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:40px;">

                    <!-- Contact info rows -->
                    ${buildRow('👤 Nombre', nombre)}
                    ${buildRow('📧 Email', `<a href="mailto:${email}" style="color:#f97316;text-decoration:none;">${email}</a>`)}
                    ${telefono ? buildRow('📱 Teléfono', telefono) : ''}
                    ${origen !== 'Web' ? buildRow('🏢 Empresa / Rubro', origen) : ''}

                    <!-- Mensaje -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                      <tr>
                        <td style="padding:0 0 8px;">
                          <p style="margin:0;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">💬 Mensaje</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="background:#0f172a;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.06);">
                          <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.7;">${(mensaje ?? '—').replace(/\n/g, '<br />')}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#f97316,#e11d48);color:#fff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:50px;text-decoration:none;">
                            Responder a ${nombre}
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
                    <p style="margin:0;font-size:12px;color:#475569;">Este correo fue generado automáticamente por el formulario de contacto de <strong style="color:#94a3b8;">techphite.com</strong></p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"TechPhite Web" <contacto@techphite.com>`,
      to: 'contacto@techphite.com',
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[API/contact] Error sending email:', error);
    return NextResponse.json(
      { ok: false, error: 'No se pudo enviar el mensaje. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}

// Helper: renders a labeled row in the email
function buildRow(label: string, value: string) {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td style="width:160px;vertical-align:top;padding-right:16px;">
          <p style="margin:0;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">${label}</p>
        </td>
        <td style="vertical-align:top;">
          <p style="margin:0;color:#e2e8f0;font-size:15px;">${value}</p>
        </td>
      </tr>
    </table>
  `;
}
